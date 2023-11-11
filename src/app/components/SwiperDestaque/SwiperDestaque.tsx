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
import { ProductType } from '@/app/types/ProductType';
import { formatPrice } from '@/lib/formatPrice';
import Link from 'next/link';
import AddCart from '../AddCart';

type CarouselItem = ProductType;

interface SwiperCarouselProps {
  carouselItems: CarouselItem[];
}

export default function SwiperDestaque({ carouselItems }: SwiperCarouselProps) {
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
      id='swiper-destaque'
      navigation={true} 
      modules={[Navigation]} 
      className="mySwiper md:w-1/2"
      breakpoints={breakpoints}
      >
        {carouselItems.map((item) => (
          <SwiperSlide key={item.id}>
            <div className='w-[100%] mb-10 overflow-hidden min-h-72 flex flex-col mx-1 rounded-xl cursor-pointer transition-all hover:text-slate-900 hover:bg-slate-900 group bg-slate-100 shadow-xl'>
            <Link href={`/product/${item.id}`} >
            <Image src={item.image} width={700} height={500} alt={item.description!} />
            <p className='text-slate-900 group-hover:text-slate-100 text-sm  truncate p-2 text-start' title={item.description!}>{item.description}</p>
            <p className='text-md text-start font-bold transition-all p-2 text-cyan-400'>{formatPrice(item.price)}</p>
            <p className='text-sm text-start  p-2 text-slate-900 group-hover:text-slate-100'>Em até <span className='font-bold'>12x</span> de <span className='font-bold text-cyan-400'>{formatPrice(item.price! / 12)}</span></p>
            </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
