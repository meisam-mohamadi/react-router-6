import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import ContactUs from './pages/ContactUs.jsx'
import Products from './pages/Products.jsx'
import SingleProduct from './pages/SingleProduct.jsx'
import MainLayout from './layout/MainLayout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>



    <Routes>
      <Route element={<MainLayout />}>

        <Route path='/' element={<App />} />
        <Route path='contactUs' element={<ContactUs />} />
        <Route path='products' element={<Products />} />
        <Route path='products/:productId' element={<SingleProduct />} />

      </Route>
    </Routes>
  </BrowserRouter>
)
