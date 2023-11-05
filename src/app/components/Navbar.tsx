import { useCartStore } from '@/store';
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/nextjs';
import Link from 'next/link';
import Cart from './Cart';

const Navbar = () => {
  return (
    <nav className='fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-300'>
      <Link href='/' className='uppercase font-bold text-md h-12 flex items-center'>Nextjs Store</Link>
      <div className='flex items-center gap-8'>
        <Cart />
      <div>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton mode='modal'>
          <button className='rounded-md border border-gray-400 px-3 py-2'>Fazer Login</button>
          </SignInButton>
        </SignedOut>
        </div>
      </div>
  </nav>
  )
}

export default Navbar;