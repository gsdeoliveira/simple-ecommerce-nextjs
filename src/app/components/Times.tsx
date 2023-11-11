import React from 'react'
import SwiperTimes from './SwiperTimes/SwiperTimes';
import Link from 'next/link';

const Times = () => {
  const timesCarousel = [{src: '/times_flamengo.png', time: 'flamengo'}, {src: '/times_fortaleza.png', time: 'fortaleza'}, {src: '/times_cruzeiro.png', time: 'cruzeiro'}, {src: '/times_corinthians.png', time: 'corinthians'}, {src: '/times_ceara.png', time: 'ceara'},];
  return (
    <section className='mb-5'>
      <div className='flex justify-between items-center font-bold p-2'>
      <h2 className='text-xl sm:text-2xl md:text-3xl my-5'>Seu time do coração</h2>
      </div>
      <SwiperTimes carouselItems={timesCarousel} />
    </section> 
  )
}

export default Times