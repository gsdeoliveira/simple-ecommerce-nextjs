import { useCartStore } from '@/store';
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/nextjs';
import Link from 'next/link';
import Cart from './Cart';
import Menu from './Menu';
import MenuItem from './MenuItem';
import Image from 'next/image';

const Navbar = () => {
  return (
      <nav className='fixed top-0 w-full flex items-center py-2 px-3 sm:px-8 justify-between z-50 bg-gray-900 text-slate-100'>
        <div className='flex justify-center items-center gap-1'>
        <Image src='/burger-menu-right-svgrepo-com.svg' width={30} height={30} alt='Abrir Menu' className='md:hidden' />
        <Link href='/' className='uppercase font-bold text-md h-12 flex items-center'>
          <Image src='/logo.png' width={100} height={48} alt='Dazanta' className='mb-2' />
        </Link>
        </div>
        <div className='flex items-center gap-8'>
          <div className='hidden md:block'>
            <Menu>
              <MenuItem subMenu title='Futebol'>
                <MenuItem subMenu title='Brasileirão' icon='/flamengo_icon.png' profundidade>
                  <MenuItem icon='/flamengo_icon.png'>Flamengo</MenuItem>
                  <MenuItem>Bahia</MenuItem>
                  <MenuItem>Botafogo</MenuItem>
                  <MenuItem>Ceará</MenuItem>
                  <MenuItem>Fortaleza</MenuItem>
                </MenuItem>
                <MenuItem subMenu title='La Liga' icon='/flamengo_icon.png' profundidade>
                  <MenuItem icon='/flamengo_icon.png'>Atlético de Madrid</MenuItem>
                  <MenuItem>Barcelona</MenuItem>
                  <MenuItem>Real Madrid</MenuItem>
                  <MenuItem>Ceará</MenuItem>
                  <MenuItem>Fortaleza</MenuItem>
                </MenuItem>
              </MenuItem> 
              <MenuItem>
                <Image src='/icons8-basquete-64.png' width={20} height={20} alt='NBA' />
                NBA
              </MenuItem>
              <MenuItem subMenu title='Categorias'>
                <MenuItem>Categoria 1</MenuItem>
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div className='flex gap-5'>
          <Cart />
          <div>
            <SignedIn >
            <UserButton />
            </SignedIn>
            <SignedOut>
            <SignInButton mode='modal'>
            <button className='rounded-md border border-slate-100 hover:bg-cyan-400 px-3 py-2'>Fazer Login</button>
            </SignInButton>
            </SignedOut>
          </div>
      </div>
    </nav>
  )
}

export default Navbar;