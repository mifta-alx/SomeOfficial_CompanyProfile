import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script';
import Head from 'next/head';

export const metadata = {
  title: 'Some Official',
  description: 'Rewrite The Myth and Repair The Legend Of The Gods',
  keywords: ['Some Official', 'Some', 'Some Clothing'],
  icons:{
    icon: '/icon.svg'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body>{children}</body>
    </html>
  )
}
