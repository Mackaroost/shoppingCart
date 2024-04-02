import React, { useContext } from 'react'
import { DataContext } from '../context/DataProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Productos = () => {
  const { data, addProducts } = useContext(DataContext)

  return (
    <section className='container mx-auto m-4'>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        transition: Bounce
      />
      <h1 className='text-center text-3xl font-bold py-12'>Productos</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-md bg-zinc-900 mx-3'>
        {data.map((producto) => (
          <div key={producto.id} className='bg-white rounded-md p-6 flex flex-col items-center justify-around flex-1'>
            <img src={producto.image} alt={producto.title} className='object-contain w-full h-32' />
            <p className='text-lg font-bold text-center pt-4'>{producto.title}</p>
            <p className='mt-2 text-justify flex-1'>{producto.description}</p>
            <p className='text-black mt-2 font-semibold text-center text-lg'>$ {producto.price}</p>
            <button
              className='mt-4 px-4 p-2 rounded-lg bg-violet-700 text-base font-semibold text-slate-50 text-center'
              onClick={() => addProducts(producto)}
            >
              Agregar
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Productos
