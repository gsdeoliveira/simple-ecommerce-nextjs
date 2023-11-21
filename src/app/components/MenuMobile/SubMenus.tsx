import Link from 'next/link'
import SubMenu from './SubMenu';
import { useMenu } from '@/store';
import Image from 'next/image';

export type MenuItem = {
  label: string;
  subMenus?: MenuItem[];
  icon?: string;
};

const SubMenus = ({menuLinks}: {menuLinks: MenuItem[]}) => {
  const menu = useMenu();
  return (
    <div className='flex flex-col gap-1 mt-3 border-t border-white/30'>
      {menuLinks.map((menuItem, index) => (
        <div key={index} className='border-b py-2 px-2 border-white/30'>
          {menuItem.subMenus && (
              <SubMenu label={menuItem.label} menuItem={menuItem.subMenus} icon={menuItem.icon} />
            )}

          {
            !menuItem.subMenus && (
              <Link href={menuItem.label.toLowerCase()} onClick={() => menu.toggleMenu()} className='flex gap-1 items-center py-1'>
                {menuItem.icon && (
                  <Image src={menuItem.icon} width={20} height={20} alt='' />
                )}
                {menuItem.label}
              </Link>
            )
          }
        </div>
      ))}
    </div>
  );
};


export default SubMenus