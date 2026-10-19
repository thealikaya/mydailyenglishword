import {config,validSubscription,sendPush} from '../../../lib/push';
import {categories,dailyWord,istanbulDate} from '../../../lib/words';
export const dynamic='force-dynamic';
export async function GET(){const c=config();return Response.json({publicKey:c.VAPID_PUBLIC_KEY||null,scheduled:c.PUSH_SCHEDULE_ACTIVE==='true'},{headers:{'Cache-Control':'no-store'}});}
export async function POST(req:Request){
 const owner=req.headers.get('oai-authenticated-user-id');if(!owner)return Response.json({error:'Oturum gerekli.'},{status:401});
 if(req.headers.get('origin')&&new URL(req.url).origin!==req.headers.get('origin'))return new Response(null,{status:403});
 try{const b:any=await req.json();if(!validSubscription(b.subscription)||!categories.some(c=>c.id===b.category)||!['A','B','C','all'].includes(b.level))return Response.json({error:'Geçersiz abonelik.'},{status:400});
 const id=Buffer.from(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(b.subscription.endpoint))).toString('hex');const db=config().DB;
 if(b.action==='remove'){await db.prepare('DELETE FROM subscriptions WHERE id=? AND owner=?').bind(id,owner).run();return Response.json({ok:true});}
 const existing=await db.prepare('SELECT owner FROM subscriptions WHERE id=?').bind(id).first<{owner:string}>();if(existing&&existing.owner!==owner)return new Response(null,{status:403});
 await db.prepare('INSERT INTO subscriptions(id,owner,subscription,category,level) VALUES(?,?,?,?,?) ON CONFLICT(id) DO UPDATE SET subscription=excluded.subscription,category=excluded.category,level=excluded.level').bind(id,owner,JSON.stringify(b.subscription),b.category,b.level).run();
 if(b.action==='test'){const w=dailyWord(b.category,b.level,istanbulDate());const status=await sendPush(b.subscription,{title:'🇬🇧 '+w.word,body:w.turkishMeaning+'\nOkunuş: '+w.pronunciationTR});if(status===404||status===410){await db.prepare('DELETE FROM subscriptions WHERE id=?').bind(id).run();}if(status<200||status>=300)return Response.json({error:'Bildirim teslim servisi isteği kabul etmedi. Aboneliği yenileyin.'},{status:502});}
 return Response.json({ok:true});
 }catch{return Response.json({error:'Bildirim işlemi tamamlanamadı. Tekrar deneyin.'},{status:500});}}
