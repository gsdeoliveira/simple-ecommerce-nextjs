"use client";
import { useCartStore } from '@/store';
import { useEffect } from 'react'

const Checkout = () => {
  const cartStore = useCartStore();
  useEffect(() => {
    fetch('api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: cartStore.cart,
        payment_intent_id: cartStore.paymentIntent,
      })
    }).then((res) => { 
      return res.json()
    }).then((data) => {
      console.log(data);
    })
  }, [cartStore.cart, cartStore.paymentIntent]);
  return (
    <div>Checkout</div>
  )
}

export default Checkout