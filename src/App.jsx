import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import About from './components/About'
import clothesProducts from './clothesProducts'
import './index.css'
const App = () => {
  return (
    <>
      <nav className='bg-gray-50 p-3'>
        <ul className='flex justify-center gap-3 items-center'>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
          <li>
            <Link to={'/cart'}>Cart</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<ProductList products={clothesProducts} />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}

export default App