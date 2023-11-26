"use client";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import Cart from "./Cart";
import Image from "next/image";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MenuMobile/MobileMenu";
import { useMenu } from "@/store";

const Navbar = () => {
  const menu = useMenu();
  return (
    <nav className="fixed top-0 w-full flex items-center py-2 px-3 sm:px-8 justify-between z-50 bg-gray-900 text-slate-100">
      <div className="flex justify-center items-center gap-1">
        <Image
          src="/burger-menu-right-svgrepo-com.svg"
          width={30}
          height={30}
          alt="Abrir Menu"
          className="md:hidden"
          onClick={() => menu.toggleMenu()}
        />
        <Link
          href="/"
          className="uppercase font-bold text-md h-12 flex items-center"
        >
          <Image
            src="/logo.png"
            width={100}
            height={48}
            alt="Dazanta"
            priority
            className="mb-2"
          />
        </Link>
      </div>
      <div className="flex items-center gap-8">
        <DesktopMenu />
        <MobileMenu />
      </div>
      <div className="flex gap-5">
        <Cart />
        <div>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="rounded-[5px] border border-slate-100 hover:bg-cyan-400 px-3 py-2">
                Fazer Login
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
