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
    <p className='text-teal-600 font-bold'>Total: {formatPrice(totalPrice)}</p>
    <button className='w-full rounded-md bg-teal-600 text-white py-2 mt-2' onClick={handleCheckout}>Finalizar Compra</button>
  </div>

  )
}

export default CheckoutButton