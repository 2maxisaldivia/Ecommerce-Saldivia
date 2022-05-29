import React, { createContext, useState } from 'react'
import { Stack, Alert } from '@mui/material'
export const cartContext = createContext()

const CartContextHOC = ({ children }) => {
  
  const [cart, setCart] = useState([])
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [total, setTotal] = useState(0)

  const addItemToCart = (item, cantidad) => {
    if(isInCart(item.id)){
      if(item.quantity + cantidad <= item.stock){
        item.quantity += cantidad
        setTotalQuantity(totalQuantity + cantidad)
        setCart([...cart])
      
      } else {
        console.log("Stock insuficiente")
        alert("Stock insuficiente, ingrese una cantidad de productos menor")
      }
    } else {
      item.quantity = cantidad
      setCart([item, ...cart])
      setTotalQuantity(totalQuantity + item.quantity)
    }
  };

  const isInCart = (itemId) => {
    const repeatedProduct = cart.find((product) => product.id === itemId)
    console.log(repeatedProduct)
    return repeatedProduct
  }

  const removeItem = (itemId) => {
    console.log("itemId", itemId)
    const items = cart.filter(item => item.id != itemId)
    setCart([...items])
  }

  const clearCart = (cart) => {
    console.log('Cart', cart)
    setCart([])
  }

  return (
    <>
      <cartContext.Provider value={{ cart, addItemToCart, removeItem, clearCart}} >
        {children}
      </cartContext.Provider>
    </> 
  )
}

export default CartContextHOC;