import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
const ProductList = ({ products }) => {

  const { addToCart } = useContext(CartContext)
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-green-600 font-bold">${product.price}</span>
                <button onClick={() => addToCart(product)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </>
  )
}

export default ProductList