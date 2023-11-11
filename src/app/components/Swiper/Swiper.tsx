"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';

// ...

type CarouselItem = {
  src: string;
  width?: number;
  height?: number;
};

interface SwiperCarouselProps {
  slidesPerView: number;
  children?: React.ReactNode;
  carouselItems: CarouselItem[];
}

export default function SwiperCarousel({ carouselItems, slidesPerView, children }: SwiperCarouselProps) {
  return (
    <>
      <Swiper slidesPerView={slidesPerView} navigation={true} modules={[Navigation, Autoplay]} loop={true} autoplay={{ delay: 3000 }} className="mySwiper md:w-1/2">
        {carouselItems.map((item) => (
          <SwiperSlide key={item.src}>
            <Image src={item.src} width={item.width || 700} height={item.height || 500} alt={item.src} priority />
            {children}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
