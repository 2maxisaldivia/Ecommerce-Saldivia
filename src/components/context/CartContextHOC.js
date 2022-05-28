import React, { createContext, useState, useEffect } from 'react'

export const cartContext = createContext()

const CartContextHOC = ({ children }) => {
  
  const [cart, setCart] = useState([])
  
  const addItemToCart = (item, cantidad) => {
    item.quantity = cantidad
    setCart([item, ...cart])
    console.log('cart', cart)
  }

  return (
    <>
      <cartContext.Provider value={{ cart, addItemToCart }} >
        {children}
      </cartContext.Provider>
    </> 
  )
}

export default CartContextHOC;