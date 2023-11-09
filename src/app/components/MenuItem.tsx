"use client"
import React, { useState } from 'react'
import Menu from './Menu'
import Image from 'next/image'

type MenuItemProps = {
  children: React.ReactNode,
  subMenu?: boolean,
  title?: string,
  profundidade?: boolean,
  icon?: string,
}

const MenuItem = ({children, subMenu, title, profundidade, icon}: MenuItemProps) => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  }

  const handleMouseOut = () => {
    setIsHovered(false);
  }

  if (subMenu) return (
    <li className='static'>
    <details onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut} open={isHovered}>
      <summary className={`hover:text-cyan-400 ${isHovered ? 'text-cyan-400 rounded-none': ''}`}>
        <div className='flex items-center justify-center gap-3'>
        {icon ? (<Image src={icon} width={20} height={20} alt='NBA' />): ''}
        {title}
        </div>
      </summary>
      <div className={`py-5 w-48 h-32 absolute  ${profundidade && 'left-44 top-0'}`}>
        <Menu asSubMenu profundidade={profundidade ? profundidade : undefined}>{children}</Menu>
      </div>
    </details>
  </li>

  )
  if(!subMenu) return (
    <li className='hover:text-cyan-400'>
      <a className='flex justify-center items-center whitespace-nowrap rounded-none hover:text-cyan-400'>
        {icon && (
          <Image src={icon} width={20} height={20} alt={icon} />
        )}
        {children}
        </a>
    </li>
  )
}

export default MenuItem