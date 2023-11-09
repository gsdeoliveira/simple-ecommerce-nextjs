type MenuProps = {
  children: React.ReactNode,
  asSubMenu?: boolean,
  profundidade?: boolean | undefined;
}

const Menu = ({children, asSubMenu, profundidade = undefined}: MenuProps) => {
  return (
    <ul className={`${asSubMenu ? 'relative bg-black p-0' : 'menu rounded-box flex-row'} ${profundidade ? '-left-[10px] -top-[10px]' : ''}`}>
      {children}
    </ul>
  )
}

export default Menu