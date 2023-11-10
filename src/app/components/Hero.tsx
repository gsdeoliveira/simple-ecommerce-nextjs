import React from 'react'
import SwiperCarousel from './Swiper/Swiper';
import Link from 'next/link';

const Hero = () => {
  const heroCarousel = [{src: '/Flamengo1.png', width: 1000}, {src: '/Flamengo2.png'}, {src: '/Flamengo3.png'}, ]
  return (
    <section className='flex flex-col md:flex-row-reverse md:p-10 md:items-center md:justify-center'>
    <SwiperCarousel carouselItems={heroCarousel} slidesPerView={1}  />

      <div className="flex flex-col gap-5 text text-center md:w-[1/2]">
        <h1 className='text-4xl md:text-5xl font-bold'>Vista o Seu Time com Estilo!</h1>
        <p className='font-semibold'>Encontre a Coleção Exclusiva de Blusas Personalizadas para Torcedores Apaixonados. Escolha Seu Time, Escolha Seu Estilo!</p>
        <button className='border border-slate-900 px-5 py-2 w-1/2 mb-5 self-center font-semibold'>
          <Link href='/'>Ver Coleções</Link>
        </button>
      </div>
    </section>
  )

  }
export default Hero;