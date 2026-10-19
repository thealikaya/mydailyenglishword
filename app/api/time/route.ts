import {istanbulDate} from '../../../lib/words';
export const dynamic='force-dynamic';
export function GET(){const now=Date.now();return Response.json({now,date:istanbulDate(new Date(now)),timezone:'Europe/Istanbul'},{headers:{'Cache-Control':'no-store'}});}
