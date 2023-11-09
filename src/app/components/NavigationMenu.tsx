"use client"
import React, { useState } from 'react'

const NavigationMenu = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  }

  const handleMouseOut = () => {
    setIsHovered(false);
  }
  return (
    <>
<ul className="menu rounded-box flex-row">
  <li className=''>
    <details onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut} open={isHovered}>
      <summary className={`hover:text-cyan-400 ${isHovered ? 'text-cyan-400': ''}`}>Futebol</summary>
      <div className=' py-5 w-32 h-32 absolute'>
      <ul className='absolute bg-black pl-0'>
        <li className='static'>
        <details>
            <summary>Brasileirão</summary>
            <ul>
              <li><a>level 3 item 1</a></li>
              <li><a>level 3 item 2</a></li>
            </ul>
          </details>
          {/* <a className='whitespace-nowrap rounded-none hover:text-cyan-400'>
          Brasileirão</a> */}
          </li>
        <li className='static'><a className='whitespace-nowrap rounded-none hover:text-cyan-400'>La Liga</a></li>
        <li className='static'><a className='whitespace-nowrap rounded-none hover:text-cyan-400'>Bundesliga</a></li>
        <li className='static'><a className='whitespace-nowrap rounded-none hover:text-cyan-400'>League 1</a></li>
      </ul>
      </div>
    </details>
  </li>
  <li className='hover:text-cyan-400'><a>Teste</a></li>
</ul>
    </>
  )
}

export default NavigationMenu