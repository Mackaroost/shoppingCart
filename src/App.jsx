import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './views/Nav'
import Productos from './views/Productos'
import Seleccionados from './views/Seleccionados'
import Layout from './views/Layout'
import Footer from './views/Footer'

function App () {
  return (
    <div className='mx-auto'>
      <Nav />
      <Routes>
        <Route
          path='/shoppingCart/'
          element={<Layout />}
          index
        />
        <Route
          path='/productos'
          element={<Productos />}
        />
        <Route
          path='/seleccionados'
          element={<Seleccionados />}
        />

      </Routes>
      <Footer />
    </div>
  )
}

export default App
