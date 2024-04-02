import React, { createContext, useEffect, useState } from 'react'
import { Bounce, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const DataContext = createContext()

const DataProvider = ({ children }) => {
  const url = 'https://fakestoreapi.com/products'
  const [data, setData] = useState([])
  const [cart, setCart] = useState([])
  const [popular, setPopular] = useState([])

  useEffect(() => {
    getData()
    getPopular()
  }, [])

  const getData = async () => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      const responseData = await response.json()
      setData(responseData)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  const addProducts = (producto) => {
    // Verificar si el producto ya está en el carrito
    const duplicado = cart.find((item) => item.id === producto.id)

    if (duplicado) {
      const updatedCart = cart.map((item) =>
        item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
      )
      setCart(updatedCart)
    } else {
      // Si el producto no está en el carrito, agregarlo con cantidad 1
      setCart([...cart, { ...producto, cantidad: 1 }])
    }

    // Mostrar la notificación de agregado al carrito
    toast(`Agregando a ${producto.title}`, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce
    })
  }

  const getPopular = async () => {
    try {
      const response = await fetch(url + '/?limit=8')
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      const responseData = await response.json()
      console.log(responseData)
      setPopular(responseData)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  return (
    <DataContext.Provider value={{ data, cart, setCart, addProducts, popular, setPopular }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider
