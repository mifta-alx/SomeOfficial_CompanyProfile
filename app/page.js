"use client"
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Plus_Jakarta_Sans } from 'next/font/google'
import localFont from 'next/font/local';
import { Icon } from '@iconify/react';
import Head from 'next/head'
import AOS from 'aos';
import 'aos/dist/aos.css';

const myFont = localFont({ src: './HappyTimeThree.otf' });

const pjs = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap'
})

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  const [toggle, setToggle] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0);
  const dataImage = [
    {
      'url': '/linen.png'
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
          <div className="md:flex justify-between items-center w-full md:w-auto hidden">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <a href="#home" className={`block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 ${pjs.className} font-normal`} aria-current="page" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">Home</a>
              </li>
              <li>
                <a href="#" className={`block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 ${pjs.className} font-normal`} data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300">Product</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-max flex justify-between items-center">
            <a href="#" className="flex items-center" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100">
              <img src="/logo.png" className="h-8 mr-3" alt="Logo" />
            </a>
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-1 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false" onClick={() => setToggle(!toggle)} data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
          </div>
          <div className="md:flex justify-between items-center w-full md:w-auto hidden">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <a href="#" className={`block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 ${pjs.className} font-normal`} data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300">Services</a>
              </li>
              <li>
                <a href="#" className={`block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 ${pjs.className} font-normal`} data-aos="fade-down" data-aos-duration="1000" data-aos-delay="600">Contact</a>
              </li>
            </ul>
          </div>
          <div className={`items-center justify-between w-full md:w-auto md:order-1 ${toggle ? '' : 'hidden'}`} id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <a href="#home" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 " aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 ">Product</a>
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
      <Image src="/banner.jpg" alt="banner"
        width={1200}
        height={800}
        className='md:h-full h-screen object-cover object-center w-full' />
      <section id='home' className='text-[#2E2E2e] md:px-[90px] px-10'>
        <div className=' md:py-[60px] pt-12'>
          <h1 className={`md:text-4xl text-3xl text-center mb-5 font-bold ${pjs.className}`} data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">Our Background</h1>
          <p className={`text-center font-medium text-sm ${pjs.className}`} data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">SOME adalah brand apparel yang menghadirkan keindahan mitologi dunia melalui desain-desain kreatif. Dalam setiap koleksi kami, kami menampilkan dewa-dewa dari berbagai budaya dengan menyoroti sisi baik dan buruk mereka. Melalui penggabungan estetika modern dengan simbolisme kuno, kami menciptakan produk berkualitas tinggi yang menggambarkan kekuatan dan keindahan dewa-dewa. Temukan cerita yang kuat di balik setiap produk SOME yang Anda miliki, dan bergabunglah dalam menjelajahi dunia yang menakjubkan ini bersama kami.</p>
        </div>
      </section>
      <div className='md:px-[90px] md:py-10 py-4'>
        <div className='flex md:flex-row flex-col justify-between lg:gap-24 items-center'>
          <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500" >
            <img src="/02.png" alt="" className='lg:max-w-xl max-w-xs' />
          </div>
          <div className='text-[#2E2E2e] px-10'>
            <h1 className={`md:text-[40px] text-3xl font-bold ${pjs.className} mb-[30px] md:max-w-sm md:text-left text-center`} data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">Eco Friendly Packaging</h1>
            <p className={`md:text-base text-sm leading-6 ${pjs.className} font-light md:text-left text-center`} data-aos="fade-left" data-aos-duration="1000" data-aos-delay="700">Kami menggunakan bahan-bahan yang bertanggung jawab secara lingkungan, kami memastikan bahwa kemasan kami memiliki dampak minimal terhadap planet kita. Kami menggunakan bahan daur ulang atau dapat terurai untuk kotak dan kemasan kami. Dengan berkomitmen untuk eco-friendly packaging, kami berharap dapat memberikan kontribusi positif terhadap perlindungan lingkungan dan menginspirasi pelanggan kami untuk mengadopsi praktek yang serupa.</p>
          </div>
        </div>
      </div>
      <div className='bg-[#FAFAFA] text-[#2E2E2e] py-10 px-4 md:py-[54px] w-full md:px-[90px]'>
        <div className={`flex flex-col md:flex-row gap-4 md:gap-12 items-center md:mb-[50px] mb-4 `}>
          <h1 className={`text-2xl md:text-5xl text-left mb-4 md:mb-5 font-bold ${pjs.className} max-w-md`} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">Bringing You the Elements of Style</h1>
          <p className={`${pjs.className} font-normal md:text-base text-sm`} data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">Circle back minimize backwards overflow yet product need full resourcing and support from a cross-functional team in order to be built, maintained, and evolved.</p>
        </div>
        <div className='hidden md:grid grid-cols-2 gap-10 pt-4 md:pt-[50px] border-t border-[#2E2E2E]' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <img src="/duo_shirt.jpg" alt="" className='max-h-56 w-full object-cover' />
          <img src="/women_shirt.jpg" alt="" className='max-h-56 w-full object-cover' />
        </div>
        <div className='grid md:hidden grid-rows-2 gap-4 pt-4 border-t border-[#2E2E2E]' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <img src="/duo_shirt.jpg" alt="" className='max-h-56 w-full object-cover' />
          <img src="/women_shirt.jpg" alt="" className='max-h-56 w-full object-cover' />
        </div>
      </div>
      <div className='py-[10px] w-full'>
        <Image width={1200}
          height={800} src="/window.png" alt="" className='w-screen object-cover md:h-fit h-60' data-aos="fade-down" data-aos-duration="800" data-aos-delay="500" />
        <div className='py-6 px-4 md:py-[10px] md:mt-10 md:px-[90px]'>
          <p className={`${pjs.className} font-normal md:font-medium text-[#2E2E2E] md:text-base text-sm`} data-aos="fade-top" data-aos-duration="600" data-aos-delay="400">Kami menggabungkan seni dan mitologi dalam setiap desain kami. Setiap artikel kami menciptakan pengalaman unik dengan menggambarkan dewa-dewa dari berbagai mitologi, memadukan simbolisme dan keindahan dalam setiap detailnya.</p>
        </div>
      </div>
      <div className='flex md:py-10 py-6 px-4 md:px-[90px] flex-col gap-[30px] w-full'>
        <div className='flex flex-row justify-between items-center'>
          <h1 className={`${pjs.className} font-bold text-2xl md:text-4xl text-black`} data-aos="fade-right" data-aos-duration="500" data-aos-delay="300">Our Products</h1>
          <div className='flex flex-row items-center md:gap-6 gap-2' data-aos="fade-left" data-aos-duration="500" data-aos-delay="300">
            <button type="button" className='text-black border hidden md:flex border-black p-3' onClick={() => setCurrentIndex(currentIndex - 2)} disabled={currentIndex === 0}><Icon icon="formkit:arrowleft" className='w-5' /></button>
            <button type="button" className='text-black border md:hidden flex border-black p-3' onClick={() => setCurrentIndex(currentIndex - 1)} disabled={currentIndex === 0}><Icon icon="formkit:arrowleft" className='w-5' /></button>
            <button type="button" className='text-white hidden md:flex flex-row items-center px-4 py-2 border border-black bg-black' onClick={() => setCurrentIndex(currentIndex + 2)} disabled={currentIndex + 2 >= dataImage.length}>Next<Icon icon="formkit:arrowright" className='ml-2 w-5' /></button>
            <button type="button" className='text-white md:hidden flex flex-row items-center p-3 md:px-4 md:py-2 border border-black bg-black' onClick={() => setCurrentIndex(currentIndex + 1)} disabled={currentIndex + 1 >= dataImage.length}><Icon icon="formkit:arrowright" className='w-5' /></button>
          </div>
        </div>
        <div className='lg:flex flex-row gap-8 border-t border-[#2E2E2E] pt-[30px] hidden w-full'>
          {
            dataImage.slice(currentIndex, currentIndex + 2).map((data, index) => {
              return (
                <img width={1200}
                  height={800} key={index} src={data.url} alt="" className='h-96 w-full object-cover' data-aos="zoom-out" data-aos-duration="500" data-aos-delay="100" />
              )
            })
          }
        </div>
        <div className='flex flex-row gap-8 border-t border-[#2E2E2E] pt-[30px] lg:hidden'>
          {
            dataImage.slice(currentIndex, currentIndex + 1).map((data, index) => {
              return (
                <Image width={1200}
                  height={800} key={index} src={data.url} alt="" className='h-96 w-full object-cover' data-aos="zoom-out" data-aos-duration="500" data-aos-delay="100" />
              )
            })
          }
        </div>
      </div>
      <footer className='bg-[#2E2E2E] py-8 md:py-10 px-4 md:px-[90px] w-full flex flex-col md:gap-10 gap-4'>
        <img src="/logo.png" className="h-9 w-20" alt="Logo" data-aos="fade-right" data-aos-duration="500" data-aos-delay="100" />
        <div className='flex md:flex-row flex-col justify-between items-center'>
          <div className='max-w-2xl' data-aos="fade-right" data-aos-duration="500" data-aos-delay="100">
            <h1 className={`md:text-5xl text-3xl ${pjs.className} font-semibold`}>Rewrite the <span className={`${myFont.className}`}>Myth</span> and repair the legend of the <span className={`${myFont.className}`}>Gods.</span></h1>
          </div>
          <div className='md:max-w-sm md:mt-0 mt-8 mb-6 md:mb-0' data-aos="fade-left" data-aos-duration="500" data-aos-delay="100">
            <div className='flex flex-row justify-center items-start gap-4'>
              <Icon icon="tabler:map-2" className='md:text-5xl text-3xl mt-2' />
              <div className='w-auto'>
                <div className='mb-2'>
                  <h3 className={`${pjs.className} font-semibold text-base md:text-lg`}>Our location</h3>
                  <p className={`${pjs.className} font-normal text-xs md:text-sm`}>Jl.Bima II No.5a RT 16/RW 04 Pendem, Junrejo, Batu.</p>
                </div>
                <iframe title="parama bara intercontinental map location" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d246.99472950747202!2d112.5817691953853!3d-7.903878556976671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNTQnMTQuMCJTIDExMsKwMzQnNTUuNCJF!5e0!3m2!1sid!2sid!4v1686391271024!5m2!1sid!2sid" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className='border-t border-[#696969] md:pt-10 pt-4' >
          <div className='flex flex-col gap-5'>
            <div className='flex flex-row md:justify-between justify-center items-center'>
              <ul className={`md:flex hidden flex-row gap-4 text-white ${pjs.className} font-normal`} >
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#">Product</a>
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
            <p className={`text-xs ${pjs.className} text-center font-medium text-white.`}>Some Official | Copyright Ⓒ 2023 | All Rights reserved</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
