type MenuProps = {
  children: React.ReactNode;
  asSubMenu?: boolean;
  profundidade?: boolean | undefined;
};

const Menu = ({
  children,
  asSubMenu,
  profundidade = undefined,
}: MenuProps) => {
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
