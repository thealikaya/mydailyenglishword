import App from './word-app';
export const dynamic='force-dynamic';
export default function Page(){return <App serverNow={Date.now()}/>;}
