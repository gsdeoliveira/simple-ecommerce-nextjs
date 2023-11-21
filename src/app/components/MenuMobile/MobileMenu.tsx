import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';
import { useMenu } from "@/store";
import SubMenus, { MenuItem } from './SubMenus';

const MobileMenu = () => {
  const menuVariants = {
    open: { x: '0', transition: { duration: 0.3 } },
    closed: { x: '-100%', transition: { duration: 0.3 } },
  };

  const menuLinks: MenuItem[] = [
    {
      label: 'Futebol',
      subMenus: [ 
        {
          label: 'Brasileirão', icon: '/brasileirao.png',
          subMenus: [
            { label: 'Flamengo', icon: '/flamengo_icon.png' },
            { label: 'Fortaleza', icon: '/times_fortaleza.png' },
            { label: 'Cruzeiro', icon: '/times_cruzeiro.png' },
            { label: 'Corinthians', icon: '/times_corinthians.png' },
            { label: 'Ceará', icon: '/times_ceara.png' },
          ],
        },
      ],
    },
    { label: 'Destaque' },
    { label: 'Categorias', subMenus: [
      { label: 'Categoria 1' },
      { label: 'Categoria 2' },
    ]}
  ];

  const menu = useMenu();

  return (
    <AnimatePresence>
      {menu.isOpen && (
        <motion.div
          key="menu"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className='w-full fixed left-0 top-0 bottom-0 h-screen z-10 bg-slate-900/50'
          onClick={() => menu.toggleMenu()}
        >
          <div className='md:hidden h-screen w-full z-20 py-2 px-3 sm:px-8 bg-slate-900' onClick={e => e.stopPropagation()}>
            <div className='flex justify-between'>
              <Image src='/logo.png' alt='Dazanta' width={100} height={48} />
              <Image src='/close-menu.svg' alt='Close Menu' width={30} height={30} onClick={() => menu.toggleMenu()} />
            </div>
            <div>
              <SubMenus menuLinks={ menuLinks } />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
