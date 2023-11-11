"use client"

import { useState } from 'react';

const Personalizar = () => {
  const [personalizar, setPersonalizar] = useState(false);

  return (
    <>
    <div className='text-slate-900 flex flex-col gap-3'>
        <p className='font-semibold'>Deseja Personalizar?</p>
        <div className='personalizar flex gap-1'>
          <label>
            <input className='hidden' type="radio" name='personalizar' onChange={() => setPersonalizar(!personalizar)} />
            <span className='border border-slate-900 px-3 py-1 rounded-[5px]'>Sim</span>
          </label>
          <label>
            <input className='hidden' type="radio" name='personalizar' defaultChecked onChange={() => setPersonalizar(!personalizar)} />
            <span className='border border-slate-900 px-3 py-1 rounded-[5px]'>Não</span>
          </label>
        </div>
    </div>
    {
      personalizar && (
        <div className='text-slate-900 flex flex-col lg:flex-row gap-3'>
          <label>
            <span>Nome: </span>
            <input type="text" placeholder='Seu Nome' className='px-2 rounded-[5px] bg-slate-100 border border-slate-900' />
          </label>
          <label>
            <span>Número: </span>
            <input type="number" placeholder='10' className='px-2 rounded-[5px] w-16 bg-slate-100 border border-slate-900' />
          </label>
        </div>
      )
    }
    </>
  )
}

export default Personalizar