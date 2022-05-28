import React, { createContext, useState } from 'react'

export const cartContext = createContext()

const CartContextHOC = ({ children }) => {
  
  const [cart, setCart] = useState([])

  const addItemToCart = (item, cantidad) => {
    item.quantity = cantidad 
    if(cantidad <= 0){
      setCart([...cart])
    } else {
      setCart([ item, ...cart])
      const productoRepetido = cart.find((product) => product.id == item.id)
      console.log("productoRepetido", productoRepetido)
      if(productoRepetido === undefined){
        console.log("no se repite")
        console.log("item.quantity", item.quantity)
        console.log("cantidad", cantidad)
        setCart([item, ...cart])

      } else {
        setCart([...cart])
        
      }
    }
  }

  const findItem = (itemId) => {
    const productRepeated = cart.find((product) => product.id = itemId)
    return productRepeated
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