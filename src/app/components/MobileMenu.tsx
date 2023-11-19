import Image from "next/image";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import { useMenu } from "@/store";

const MobileMenu = () => {
  const menu = useMenu();
  if (menu.isOpen == true) {
    return (
      <div
        className={`w-full absolute left-0 top-0 bottom-0 h-screen z-10 bg-slate-900/50`}
        onClick={() => menu.toggleMenu()}
      >
        <div
          className={`md:hidden menuAnimation h-screen w-3/4 min-[520px]:w-1/2 relative z-20 bg-slate-900`}
          onClick={(e) => e.stopPropagation()}
        >
          <Menu mobile>
            <MenuItem subMenu title="Futebol">
              <MenuItem
                subMenu
                title="Brasileirão"
                icon="/flamengo_icon.png"
                profundidade
              >
                <MenuItem icon="/flamengo_icon.png">Flamengo</MenuItem>
                <MenuItem>Bahia</MenuItem>
                <MenuItem>Botafogo</MenuItem>
                <MenuItem>Ceará</MenuItem>
                <MenuItem>Fortaleza</MenuItem>
              </MenuItem>
              <MenuItem
                subMenu
                title="La Liga"
                icon="/flamengo_icon.png"
                profundidade
              >
                <MenuItem icon="/flamengo_icon.png">
                  Atlético de Madrid
                </MenuItem>
                <MenuItem>Barcelona</MenuItem>
                <MenuItem>Real Madrid</MenuItem>
                <MenuItem>Ceará</MenuItem>
                <MenuItem>Fortaleza</MenuItem>
              </MenuItem>
            </MenuItem>
            <MenuItem>
              <Image
                src="/icons8-basquete-64.png"
                width={20}
                height={20}
                alt="NBA"
              />
              NBA
            </MenuItem>
            <MenuItem subMenu title="Categorias">
              <MenuItem>Categoria 1</MenuItem>
            </MenuItem>
          </Menu>
        </div>
        Desk
      </div>
    );
  }
};

export default MobileMenu;
