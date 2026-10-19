import {createECDH,hkdfSync,randomBytes,createCipheriv,createPrivateKey,sign} from 'node:crypto';
import {env} from 'cloudflare:workers';
export function config(){return env as unknown as {DB:D1Database;VAPID_PUBLIC_KEY?:string;VAPID_PRIVATE_JWK?:string;PUSH_SCHEDULE_ACTIVE?:string};}
export function validSubscription(s:any){try{const u=new URL(s.endpoint);return u.protocol==='https:'&&u.port===''&&['fcm.googleapis.com','updates.push.services.mozilla.com','web.push.apple.com'].includes(u.hostname)&&typeof s.keys?.p256dh==='string'&&Buffer.from(s.keys.p256dh,'base64url').length===65&&typeof s.keys?.auth==='string'&&Buffer.from(s.keys.auth,'base64url').length===16;}catch{return false;}}
export async function sendPush(subscription:any,payload:object){
 if(!validSubscription(subscription))throw new Error('Invalid push subscription');
 const c=config();if(!c.VAPID_PRIVATE_JWK||!c.VAPID_PUBLIC_KEY)throw new Error('Push not configured');
 const receiver=Buffer.from(subscription.keys.p256dh,'base64url');const auth=Buffer.from(subscription.keys.auth,'base64url');
 const ecdh=createECDH('prime256v1');ecdh.generateKeys();const sender=ecdh.getPublicKey();const shared=ecdh.computeSecret(receiver);
 const ikm=Buffer.from(hkdfSync('sha256',shared,auth,Buffer.concat([Buffer.from('WebPush: info\0'),receiver,sender]),32));
 const salt=randomBytes(16);const key=Buffer.from(hkdfSync('sha256',ikm,salt,Buffer.from('Content-Encoding: aes128gcm\0'),16));const nonce=Buffer.from(hkdfSync('sha256',ikm,salt,Buffer.from('Content-Encoding: nonce\0'),12));
 const cipher=createCipheriv('aes-128-gcm',key,nonce);const message=Buffer.concat([Buffer.from(JSON.stringify(payload)),Buffer.from([2])]);const encrypted=Buffer.concat([cipher.update(message),cipher.final(),cipher.getAuthTag()]);
 const record=Buffer.alloc(5);record.writeUInt32BE(4096,0);record[4]=65;const body=Buffer.concat([salt,record,sender,encrypted]);
 const b64=(o:object)=>Buffer.from(JSON.stringify(o)).toString('base64url');const unsigned=b64({typ:'JWT',alg:'ES256'})+'.'+b64({aud:new URL(subscription.endpoint).origin,exp:Math.floor(Date.now()/1000)+3600,sub:'https://her-gun-bir-kelime.qlikaya.chatgpt.site'});
 const signature=sign('sha256',Buffer.from(unsigned),{key:createPrivateKey({key:JSON.parse(c.VAPID_PRIVATE_JWK),format:'jwk'}),dsaEncoding:'ieee-p1363'}).toString('base64url');
 const result=await fetch(subscription.endpoint,{method:'POST',headers:{Authorization:`vapid t=${unsigned}.${signature}, k=${c.VAPID_PUBLIC_KEY}`,'Content-Encoding':'aes128gcm','Content-Type':'application/octet-stream',TTL:'86400',Urgency:'normal'},body});return result.status;
}
