"use client";

import { formatPrice } from '@/lib/formatPrice';
import { useCartStore } from '@/store'
import Image from 'next/image';
import CheckoutButton from './CheckoutButton';
import Checkout from './Checkout';

const CartDrawer = () => {
  const useStore = useCartStore();

  const totalPrice = useStore.cart.reduce((acc, item) => {
    return acc + item.price! * item.quantity!;
  }, 0);

  return (
    <div className='fixed w-full h-screen bg-black/25 left-0 top-0 z-50' onClick={() => useStore.toggleCart()}>
    <div className='absolute bg-slate-600 right-0 top-0 w-full min-[480px]:w-[80%] sm:w-[55%] lg:w-1/3 h-screen p-3 md:p-5 lg:p-8 overflow-y-scroll' onClick={(e) => e.stopPropagation()}>

    <button className='font-bold text-sm text-teal-600' onClick={() => useStore.toggleCart()}>Voltar para loja</button>
    <div className='border-t border-gray-400 my-4'></div>
    { useStore.onCheckout === 'cart' && (
      useStore.cart.map((item) => (
        <div key={item.id} className='flex gap-4 py-4'>
          <Image
          src={item.image}
          alt={item.name}
          width={120}
          height={120}
          className='object-cover w-24'
          />
          <div className='w-full'>
            <h2 className='w-[100%] whitespace-normal'>{item.name}</h2>
            <h2>Quantidade: {item.quantity}</h2>
            <p className='text-sm text-teal-600 font-bold'>{formatPrice(item.price)}</p>
            <button className='py-1 px-2 border rounded-md mt-2 text-sm' onClick={() => useStore.addProduct(item)}>Adicionar</button>
            <button className='py-1 px-2 border rounded-md mt-2 text-sm ml-1' onClick={() => useStore.removeProduct(item)}>Remover</button>
          </div> 
        </div>
      ))
      )
    }

    {
      useStore.cart.length > 0 && useStore.onCheckout === 'cart' && (
        <CheckoutButton totalPrice={totalPrice} />
      )
    }
    {
      useStore.onCheckout === 'checkout' && (
        <Checkout />
      )
    }
    </div>
  </div>

  )
}

export default CartDrawer