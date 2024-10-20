import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, addToCart, decreaseQuantity } = useContext(CartContext);

  // Calculate the total price
  const totalPrice = cart.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  return (
    <div className="container mx-auto p-6">
      {cart.length === 0 ? (
        <p className="text-center text-gray-600 text-xl">Your cart is empty</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cart.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover mb-4"
                />
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                  <span className="text-green-600 font-bold">${product.price}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <button onClick={() => decreaseQuantity(product.id)} className="bg-gray-100 px-4 py-2 text-xl text-zinc-950 font-semibold rounded hover:bg-gray-200 transition">
                    -
                  </button>
                  <h2 className="text-md font-medium text-gray-700">{product.quantity}</h2>
                  <button onClick={() => addToCart(product)} className="bg-gray-100 px-4 py-2 text-xl text-zinc-950 font-semibold rounded hover:bg-gray-200 transition">
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full mt-4"
                >
                  Remove from Cart
                </button>
              </div>
            ))}
          </div>

          {/* Display Total Price */}
          <div className="text-right mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Total Price: ${totalPrice.toFixed(2)}</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
