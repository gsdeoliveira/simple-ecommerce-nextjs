"use server";
import Link from 'next/link'
import React from 'react'

import { stripe } from '@/lib/stripe';
import SwiperDestaque from './SwiperDestaque/SwiperDestaque';


const Destaque = async () => {
  const  {data: products } = await stripe.products.list({limit: 10});
  const formatedProducts = await Promise.all(
    products.map( async (product) => {
      const price = await stripe.prices.list({
        product: product.id,
      });
      return {
        id: product.id,
        name: product.name,
        price: price.data[0].unit_amount,
        description: product.description,
        image: product.images[0],
        currency: price.data[0].currency,
      }
    }),
  )


    return (
    <section className='mb-5'>
      <div className='flex justify-between items-center font-bold p-2'>
      <Link href='/destaque'><h2 className='text-xl sm:text-2xl md:text-3xl my-5'>Em Destaque</h2></Link>
      <Link href='/destaque' className='font-md'>Ver Mais</Link>
      </div>
      <SwiperDestaque carouselItems={formatedProducts} />
    </section>
  )
}

export default Destaque