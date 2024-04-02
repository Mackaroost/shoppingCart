import React, { useContext } from 'react'
import { DataContext } from '../context/DataProvider'
import { Link } from 'react-router-dom'

const Layout = () => {
  const { popular } = useContext(DataContext)
  // console.log(popular)
  return (
    <div className='min-h-screen bg-zinc-950'>
      <header className=' pt-7'>
        <div className=' bg-zinc-800 container mx-auto rounded-md m-4 p-4'>
          <div className='header m-5 rounded-md bg-slate-500 ' />
        </div>
      </header>
      <section className='container mx-auto rounded-md  p-4 bg-zinc-800'>
        <div className='flex gap-3 p-4'>
          <p className='text-2xl text-slate-50'>Mas Populares <span className='text-2xl text-pink-500'>Ahora</span></p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-4'>
          {
        popular.map((item) => (
          <div key={item.id} className='bg-white rounded-md p-6 flex flex-col items-center m-4 justify-around flex-1'>
            <img src={item.image} alt={item.title} className='object-contain w-full h-32' />
            <p className='text-lg font-bold text-center pt-4'>{item.title}</p>
            <p className='mt-2 mx-4'> ⭐{item.rating.rate}</p>
            <p className='mt-2 text-black font-semibold text-center text-lg'>${item.price}</p>
          </div>
        ))
}
        </div>
        <div className='text-center pt-5'>
          <Link
            to='/productos'
            className='mt-4 px-4 p-2 rounded-lg bg-violet-700 text-base font-semibold text-slate-50 text-center'
          >
            Ver mas Productos
          </Link>
        </div>
      </section>
    </div>

  )
}

export default Layout
