import React, { createContext, useState } from 'react'
export const CartContext = createContext()

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const exixtingCart = prevCart.find((item) => item.id === product.id);

      if (exixtingCart) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      } else {
        return [...prevCart, { ...product, quantity: 1 }]
      }
    })
  }


  // Decrease Quantity function
  const decreaseQuantity = (productId) => {
    setCart((prevCart) => {
      return prevCart.map(item => {
        if (item.id === productId) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item; // Keep the item but don't decrease if quantity is 1
          }
        }
        return item;
      });
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
