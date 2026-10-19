import {config,sendPush} from '../../../lib/push';
import {dailyWord,istanbulDate} from '../../../lib/words';
export const dynamic='force-dynamic';
// Owner-private Sites dispatch is the authorization boundary for unattended calls.
// The site must remain owner-private; do not expose this endpoint on public sites.
export async function POST(req:Request){
 if(req.headers.get('origin'))return Response.json({error:'Unattended endpoint'},{status:403});
 const db=config().DB;const date=istanbulDate();const cutoff=new Date(Date.now()-300000).toISOString();
 const rows=await db.prepare('SELECT * FROM subscriptions WHERE (last_date IS NULL OR last_date<>?) AND (claimed_at IS NULL OR claimed_at<?) LIMIT 100').bind(date,cutoff).all<any>();let sent=0,expired=0,failed=0;
 for(const r of rows.results){const claim=await db.prepare('UPDATE subscriptions SET claimed_at=? WHERE id=? AND (last_date IS NULL OR last_date<>?) AND (claimed_at IS NULL OR claimed_at<?)').bind(new Date().toISOString(),r.id,date,cutoff).run();if(!claim.meta.changes)continue;
 try{const w=dailyWord(r.category,r.level,date);const status=await sendPush(JSON.parse(r.subscription),{title:'🇬🇧 '+w.word,body:w.turkishMeaning+'\nOkunuş: '+w.pronunciationTR});if(status===404||status===410){await db.prepare('DELETE FROM subscriptions WHERE id=?').bind(r.id).run();expired++;}else if(status>=200&&status<300){await db.prepare('UPDATE subscriptions SET last_date=?,claimed_at=NULL WHERE id=?').bind(date,r.id).run();sent++;}else{await db.prepare('UPDATE subscriptions SET claimed_at=NULL WHERE id=?').bind(r.id).run();failed++;}}catch{await db.prepare('UPDATE subscriptions SET claimed_at=NULL WHERE id=?').bind(r.id).run();failed++;}}
 return Response.json({date,sent,expired,failed,remaining:await db.prepare('SELECT COUNT(*) AS count FROM subscriptions WHERE last_date IS NULL OR last_date<>?').bind(date).first()});
}
export async function GET(){return Response.json({date:istanbulDate(),subscriptions:await config().DB.prepare('SELECT COUNT(*) AS count FROM subscriptions').first(),delivered:await config().DB.prepare('SELECT COUNT(*) AS count FROM subscriptions WHERE last_date=?').bind(istanbulDate()).first()},{headers:{'Cache-Control':'no-store'}});}
