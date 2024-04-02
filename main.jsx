import React from 'react'
import ReactDOM from 'react-dom/client'
import DataProvider from './src/context/DataProvider'
import App from './src/App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('app')).render(
  <DataProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DataProvider>
)
