import React, { useContext } from 'react'
import { DataContext } from '../context/DataProvider'
import { ToastContainer, Bounce, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Seleccionados = () => {
  const { cart, setCart, addProducts } = useContext(DataContext)
  const total = cart.reduce((ac, el) => ac + el.price * el.cantidad, 0).toFixed(1)

  const decremento = (producto) => {
    // Verificar si el producto ya está en el carrito
    const duplicado = cart.find((item) => item.id === producto.id)

    if (duplicado && duplicado.cantidad > 1) { // Verificar si la cantidad es mayor que 1 antes de decrementar
      const updatedCart = cart.map((item) =>
        item.id === producto.id ? { ...item, cantidad: item.cantidad - 1 } : item
      )
      setCart(updatedCart)
    }
  }

  const removeItem = (producto) => {
    const productDelete = cart.filter(item => item.id !== producto.id)
    setCart(productDelete)
    // Mostrar la notificación de eliminando al carrito
    toast(`Eliminando a ${producto.title}`, {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce
    })
  }

  return (
    <section className='section bg-slate-50 pt-3 h-screen m-4'>
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
      <div className='p-4  rounded mx-auto shadow-sm md:w-[550px] bg-sky-400 grid grid-cols-1'>
        {cart.map((item) => (
          <div key={item.id} className='card flex flex-row items-center justify-around border-b border-white gap-x-4'>
            <img src={item.image} alt={item.title} className='object-cover rounded-full p-4 w-24 h-24 ' />
            <p className='text-slate-50 font-bold text-center text-base'>{item.title}</p>
            <div className='flex items-center justify-center '>
              <p className='text-slate-50 font-bold text-center text-base cursor-pointer' onClick={() => decremento(item)}>-</p>
              <p className='text-slate-50 font-bold text-center text-base px-3'>{item.cantidad}</p>
              <p className='text-slate-50 font-bold text-center text-base cursor-pointer' onClick={() => addProducts(item)}>+</p>
            </div>
            <p className='text-slate-50 text-lg mt-2 text-center  font-semibold'>${item.price}</p>
            <p className='font-ligh text-sm text-slate-50 text-center cursor-pointer pt-2' onClick={() => removeItem(item)}>Quitar</p>
          </div>
        ))}
        <div className='p-3 bg-stone-50 mt-3'>
          {cart.length > 0
            ? (
              <p className='text-black text-center text-lg font-semibold'>Total: ${total}</p>
              )
            : (
              <p className='text-center'>No hay productos en el carrito</p>
              )}
        </div>
      </div>
    </section>
  )
}

export default Seleccionados
