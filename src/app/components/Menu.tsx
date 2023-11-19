"use client";
import { useMenu } from "@/store";
import Image from "next/image";

type MenuProps = {
  children: React.ReactNode;
  asSubMenu?: boolean;
  profundidade?: boolean | undefined;
  mobile?: boolean | undefined;
};

const Menu = ({
  children,
  asSubMenu,
  profundidade = undefined,
  mobile,
}: MenuProps) => {
  const menu = useMenu();
  if (mobile) {
    return (
      <div>
        <div className="flex justify-between items-center p-3">
          <Image
            src="/logo.png"
            width={100}
            height={48}
            alt="Dazanta"
            className="mb-2"
          />
          <Image
            src="/close-menu.svg"
            width={32}
            height={32}
            alt="Close menu"
            onClick={() => menu.toggleMenu()}
          />
        </div>
        <ul
          className={`text-md ${
            asSubMenu
              ? "bg-black p-0"
              : "menu rounded-box flex-col items-start text-start md:flex-row"
          } ${profundidade ? "-left-[10px] -top-[10px]" : ""}`}
        >
          {children}
        </ul>
      </div>
    );
  }
  return (
    <ul
      className={` ${
        asSubMenu
          ? "md:bg-black p-0"
          : "menu rounded-box flex-col items-center md:flex-row"
      } ${profundidade ? "md:-left-[10px] md:-top-[10px]" : ""}`}
    >
      {children}
    </ul>
  );
};

export default Menu;
