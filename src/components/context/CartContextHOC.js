import React, { createContext, useState } from 'react'

export const cartContext = createContext()

const CartContextHOC = ({ children }) => {
  
  const [cart, setCart] = useState([1, 2, 3, 4])
  
  const addToCart = (item) => {
    setCart([...cart, item])
    console.log("cart", cart)
  }
  
  return (
    <>
      <cartContext.Provider value={{ cart, addToCart }} >
        {children}
      </cartContext.Provider>
    </> 
  )
}

export default CartContextHOC;