"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

// ...

type CarouselItem = {
  src: string;
  time: string;
  width?: number;
  height?: number;
};

interface SwiperCarouselProps {
  carouselItems: CarouselItem[];
}

export default function SwiperTimes({ carouselItems }: SwiperCarouselProps) {
  const breakpoints = {
    320: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  };
  return (
    <>
      <Swiper 
      id='swiper-times'
      navigation={true} 
      modules={[Navigation]} 
      className="mySwiper md:w-1/2"
      breakpoints={breakpoints}
      >
        {carouselItems.map((item) => (
          <SwiperSlide key={item.src}>
            <Link href={`/times/${item.time}`} className='w-[100%] flex flex-col max-h-[24rem] mx-1 p-3 rounded-xl cursor-pointer transition-all hover:text-slate-900 hover:bg-cyan-400 bg-slate-900'>
            <div className='h-[70%]'><Image src={item.src} width={item.width || 700} height={item.height || 700} alt={item.src} className='' /></div>
            <p className='text-slate-100 text-sm capitalize'>{item.time}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
