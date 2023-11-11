import { formatPrice } from '@/lib/formatPrice'
import { useCartStore } from '@/store'
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

type CheckoutButtonProps = {
  totalPrice: number;
}

const CheckoutButton = ({ totalPrice }: CheckoutButtonProps) => {
  const router = useRouter();
  const { user } = useUser();
  const useStore = useCartStore();

  const handleCheckout = () => {
    if(!user) {
      useStore.toggleCart();
      router.push("/sign-in");
      return;
    }
    useStore.setCheckout('checkout');
  }

  return (
    <div>
    <p className='text-slate-100 font-bold'>Total: <span className='text-cyan-400'>{formatPrice(totalPrice)}</span></p>
    <button className='w-full rounded-md bg-cyan-400 text-white py-2 mt-2' onClick={handleCheckout}>Finalizar Compra</button>
  </div>

  )
}

export default CheckoutButton