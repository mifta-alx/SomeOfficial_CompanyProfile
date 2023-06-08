"use client"
import Image from 'next/image'
import { useState } from 'react'
import { Plus_Jakarta_Sans } from 'next/font/google'
import localFont from 'next/font/local';
import { Icon } from '@iconify/react';
import Head from 'next/head'

const myFont = localFont({ src: './HappyTimeThree.otf' });

const pjs = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap'
})

export default function Home() {
  const [toggle, setToggle] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0);
  const dataImage = [
    {
      'url': '/bucket.png'
    },
    {
      'url': '/mug.png'
    },
    {
      'url': '/bucket.png'
    },
    {
      'url': '/bracellet.png'
    },
  ]
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <nav className="bg-transparent w-full z-20 top-0 left-0 absolute">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">
            <img src="/logo.png" className="h-8 mr-3" alt="Logo" />
          </a>
          <div className="flex md:order-2">
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-1 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false" onClick={() => setToggle(!toggle)}>
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${toggle ? '' : 'hidden'}`} id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <a href="#home" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 " aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 ">About</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 ">Services</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 ">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <img src="/banner.jpg" alt="" className='md:h-full h-screen object-cover object-center w-full' />
      <section id='home' className='text-[#2E2E2e] md:px-[90px] px-10'>
        <div className=' md:py-[60px] pt-12'>
          <h1 className={`md:text-4xl text-3xl text-center mb-5 font-bold ${pjs.className}`}>Our Background</h1>
          <p className={`text-center font-medium text-sm ${pjs.className}`}>SOME adalah brand apparel yang menghadirkan keindahan mitologi dunia melalui desain-desain kreatif. Dalam setiap koleksi kami, kami menampilkan dewa-dewa dari berbagai budaya dengan menyoroti sisi baik dan buruk mereka. Melalui penggabungan estetika modern dengan simbolisme kuno, kami menciptakan produk berkualitas tinggi yang menggambarkan kekuatan dan keindahan dewa-dewa. Temukan cerita yang kuat di balik setiap produk SOME yang Anda miliki, dan bergabunglah dalam menjelajahi dunia yang menakjubkan ini bersama kami.</p>
        </div>
      </section>
      <div className='md:px-[90px] md:py-10'>
        <div className='flex md:flex-row flex-col justify-between md:gap-24 items-center'>
          <div>
            <img src="/02.png" alt="" className='md:max-w-xl max-w-xs' />
          </div>
          <div className='text-[#2E2E2e] px-10'>
            <h1 className={`md:text-[40px] text-3xl font-bold ${pjs.className} mb-[30px] md:max-w-sm md:text-left text-center`}>Eco Friendly Packaging</h1>
            <p className={`md:text-base text-sm leading-6 ${pjs.className} font-light md:text-left text-center`}>Kami menggunakan bahan-bahan yang bertanggung jawab secara lingkungan, kami memastikan bahwa kemasan kami memiliki dampak minimal terhadap planet kita. Kami menggunakan bahan daur ulang atau dapat terurai untuk kotak dan kemasan kami. Dengan berkomitmen untuk eco-friendly packaging, kami berharap dapat memberikan kontribusi positif terhadap perlindungan lingkungan dan menginspirasi pelanggan kami untuk mengadopsi praktek yang serupa.</p>
          </div>
        </div>
      </div>
      <div className='bg-[#FAFAFA] text-[#2E2E2e] py-[54px] w-full px-[90px]'>
        <div className={`flex flex-row gap-12 items-center mb-[50px]`}>
          <h1 className={`text-5xl text-left mb-5 font-bold ${pjs.className} max-w-md`}>Bringing You the Elements of Style</h1>
          <p className={`${pjs.className} font-normal`}>Circle back minimize backwards overflow yet product need full resourcing and support from a cross-functional team in order to be built, maintained, and evolved.</p>
        </div>
        <div className='grid grid-cols-2 gap-10 pt-[50px] border-t border-[#2E2E2E]'>
          <img src="/duo_shirt.jpg" alt="" className='max-h-56 w-full object-cover' />
          <img src="/women_shirt.jpg" alt="" className='max-h-56 w-full object-cover' />
        </div>
      </div>
      <div className='py-[10px] w-full'>
        <img src="/window.png" alt="" className='w-full object-cover' />
        <div className='py-[10px] mt-10 px-[90px]'>
          <p className={`${pjs.className} font-medium text-[#2E2E2E]`}>SOME adalah sebuah brand yang menggabungkan seni dan mitologi dalam desain kami. Kami percaya bahwa cerita dan keajaiban mitologi dapat diabadikan dalam karya seni yang dipakai setiap hari. Setiap artikel kami menciptakan pengalaman unik dengan menggambarkan dewa-dewa dari berbagai mitologi, memadukan simbolisme dan keindahan dalam setiap detailnya. Selain menciptakan pakaian yang menginspirasi, kami juga mengutamakan keberlanjutan dengan menggunakan bahan ramah lingkungan dan proses produksi yang bertanggung jawab. Dengan merek SOME, kami mengajak Anda untuk merayakan keajaiban mitologi melalui mode yang unik dan berdaya tahan, mengingatkan kita akan warisan budaya dan keindahan yang ada di sekitar kita.</p>
        </div>
      </div>
      <div className='flex md:py-10 md:px-[90px] flex-col gap-[30px] w-full'>
        <div className='flex flex-row justify-between items-center'>
          <h1 className={`${pjs.className} font-bold text-4xl text-black`}>Our Products</h1>
          <div className='flex flex-row items-center gap-6'>
            <button type="button" className='text-black border border-black p-3' onClick={() => setCurrentIndex(0)}><Icon icon="formkit:arrowleft" className='w-5' /></button>
            <button type="button" className='text-white flex flex-row items-center px-4 py-2 border border-black bg-black' onClick={() => setCurrentIndex(currentIndex + 2)}>Next<Icon icon="formkit:arrowright" className='ml-2 w-5' /></button>
          </div>
        </div>
        <div className='flex flex-row gap-8 border-t border-[#2E2E2E] pt-[30px]'>
          {
            dataImage.slice(currentIndex, currentIndex + 2).map((data) => {
              return (
                <img src={data.url} alt="" className='h-96 w-full object-cover' />
              )
            })
          }
        </div>
      </div>
      <footer className='bg-[#2E2E2E] py-10 px-[90px] w-full flex flex-col gap-10'>
        <img src="/logo.png" className="h-9 w-fit" alt="Logo" />
        <div className='max-w-2xl'>
          <h1 className='text-5xl'>Rewrite the <span className={`${myFont.className}`}>Myth</span> and repair the legend of the <span className={`${myFont.className}`}>Gods.</span></h1>
        </div>
        <div className='border-t border-[#696969] pt-10'>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-row justify-between items-center'>
              <ul className={`flex flex-row gap-4 text-white ${pjs.className} font-normal`}>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
              <ul className={`flex flex-row gap-4 text-white ${pjs.className} font-normal`}>
                <li><a href="https://www.instagram.com/someofficial.id/"><Icon icon="mdi:instagram" /></a></li>
                <li><a href="https://www.tiktok.com/@someofficial.id?is_from_webapp=1&sender_device=pc"><Icon icon="ic:outline-tiktok" /></a></li>
                <li><Icon icon="uil:facebook" /></li>
              </ul>
            </div>
            <p className={`text-xs ${pjs.className} text-center font-medium`}>Some Official | Copyright Ⓒ 2023 | All Rights reserved</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
