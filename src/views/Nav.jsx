import React from 'react'
import { Link } from 'react-router-dom'

function Nav () {
  return (
    <nav className=' bg-zinc-950 mx-auto p-4'>
      <div className='mx-auto flex flex-col items-center justify-center md:container md:flex-row md:justify-between'>
        <div>
          <Link className='text-2xl text-slate-50 mx-3' to='/shoppingCart/'>Logotipo</Link>
        </div>
        <div className='container-links flex gap-x-4'>
          <Link className='text-lg text-slate-50' to='/productos'>Productos </Link>
          <Link className='text-lg text-slate-50' to='/seleccionados'> Seleccionados </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
