import React from 'react'
import SwiperTimes from './SwiperTimes/SwiperTimes';
import { times } from '@/constants/times';

const Times = () => {
  const timesCarousel = times;
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