import React, { createContext, useState } from 'react'

export const cartContext = createContext()

const CartContextHOC = ({ children }) => {
  
  const [cart, setCart] = useState([])
  
  const addToCart = (item) => {
    setCart([item, ...cart])
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