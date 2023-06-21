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
      <body>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4074960792155900"
          crossorigin="anonymous"></script>
        <ins class="adsbygoogle block"
          data-ad-client="ca-pub-4074960792155900"
          data-ad-slot="7798703895"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>
          (adsbygoogle = window.adsbygoogle || []).push({ });
        {children}</body>
    </html>
  )
}
