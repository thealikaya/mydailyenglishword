import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'Bir Kelime — Her gün küçük bir adım',description:'Sevdiğin konulardan her gün bir İngilizce kelime. Türkçe anlam, telaffuz ve küçük bir öğrenme alışkanlığı.',manifest:'/manifest.webmanifest',icons:{icon:'/icon.svg',apple:'/icon-192.png'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="tr"><body>{children}</body></html>}
