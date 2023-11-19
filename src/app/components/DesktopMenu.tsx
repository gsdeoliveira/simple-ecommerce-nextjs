import Image from "next/image";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

const DesktopMenu = () => {
  return (
    <div className="hidden md:block">
      <Menu>
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
            <MenuItem icon="/flamengo_icon.png">Atlético de Madrid</MenuItem>
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
  );
};

export default DesktopMenu;
