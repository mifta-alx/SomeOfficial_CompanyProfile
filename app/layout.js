import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script';

export const metadata = {
  title: 'Some Official',
  description: 'Some Official',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <Script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4074960792155900"
        crossorigin="anonymous" />
      <Script
        id="Adsense-id" async
        onError={(e) => { console.error("Script failed to load", e); }}
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4074960792155900"
        crossorigin="anonymous"
      />
      <body>{children}</body>
    </html>
  )
}
