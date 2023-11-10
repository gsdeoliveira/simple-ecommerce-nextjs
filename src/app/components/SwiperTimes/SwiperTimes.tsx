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

// ...

type CarouselItem = {
  src: string;
  width?: number;
  height?: number;
};

interface SwiperCarouselProps {
  carouselItems: CarouselItem[];
}

export default function SwiperTimes({ carouselItems }: SwiperCarouselProps) {
  const breakpoints = {
    320: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
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
            <div className='w-[100%] flex flex-col mx-1 p-3 rounded-xl cursor-pointer transition-all hover:text-slate-900 hover:bg-cyan-400 bg-slate-900'>
            <Image src={item.src} width={item.width || 700} height={item.height || 500} alt={item.src} />
            <p className='text-slate-100 text-sm'>Flamengo</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
