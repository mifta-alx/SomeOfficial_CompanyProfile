import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script';
import Head from 'next/head';

// export const metadata = {
//   title: 'Some Official',
//   description: 'Some Official',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <head>
        <title>Some Official</title>
        <meta name="description" content="Some Official" />
        <meta property="og:title" content="Some Official" />
        <meta property="og:description" content="Some Official" />
        <meta property="og:url" content="https://someofficial.vercel.app/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/icon.svg" />
      </head>
      <body>{children}</body>
    </html>
  )
}
