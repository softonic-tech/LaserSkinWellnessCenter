import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Laser Skin & Wellness Center | Chicago Med Spa', description: 'Explore personalized non-surgical aesthetic treatments at Laser Skin & Wellness Center in Des Plaines, Illinois.' };
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}
