import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { MenuItem } from './SubMenus'
import { useMenu } from '@/store'
import { times } from '@/constants/times'

function removerAcentos(palavra: string) {
  // Substitui caracteres acentuados por caracteres não acentuados
  return palavra.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

const SubMenu = ({ label, menuItem, icon }: {label: string, menuItem: MenuItem[], icon?: string}) => {
  const [subMenuIsOpen, setsubMenuIsOpen] = useState(false)
  const menuMobile = useMenu();

  const formatLink = (label: string) => {
    label = removerAcentos(label)
    const timesNames = times.filter((time) => label.toLowerCase() === time.time)
    if(timesNames.length > 0) {
      return `/times/${timesNames[0].time}`
    } return `/${label.toLowerCase()}`
  }

  return (
    <div>
    <div className='flex justify-between items-center' onClick={() => setsubMenuIsOpen(state => !state)}>
      <Link href='#' className='flex gap-1 items-center py-1'>
        { icon && (
          <Image src={icon} width={20} height={20} alt='' />
        )}
        {label}
      </Link>
      <Image src='/arrow-right.svg' width={20} height={20} alt='' className={`transition-all ${subMenuIsOpen ? 'rotate-90' : 'rotate-0'}`} />
    </div>

    {subMenuIsOpen && (
      <div className='ml-5'>
        {menuItem.map((menu, index) => (
          <div key={index}>
            {menu.subMenus && (
              <SubMenu label={menu.label} menuItem={menu.subMenus} icon={menu.icon} />
            )}

            {!menu.subMenus && (
              <Link href={formatLink(menu.label)} onClick={() => menuMobile.toggleMenu()} className='flex gap-1 items-center py-1'>
                { menu.icon && (
                  <Image src={menu.icon} width={20} height={20} alt='' />
                ) }
                {menu.label}
                </Link>
            )}
          </div>
        ))}
      </div>
    )}
    </div>
  )
}

export default SubMenu