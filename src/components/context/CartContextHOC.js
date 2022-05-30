import React, { createContext, useState } from 'react'
export const cartContext = createContext()

const CartContextHOC = ({ children }) => {
  
  const [cart, setCart] = useState([])
  const [productsInCart, setProductsInCart] = useState(0)
  const [repeated, setRepeated] = useState(undefined)
  const [total, setTotal] = useState(0)

  const addItemToCart = (item, cantidad) => {
    if(isInCart(item.id)){
      if(cantidad <= 0){
        setCart([...cart])
      } else{
        if(item.quantity + cantidad <= item.stock){
          item.quantity += cantidad
          setProductsInCart(productsInCart + cantidad)
          console.log('item.quantity', item.quantity)
          console.log('item.quantity', item.price)
          setTotal(item.quantity * item.price + total)
          setCart([...cart])
        } else {
          console.log("Stock insuficiente")
          setTotal(total)
          alert("Stock insuficiente, ingrese una cantidad de productos menor")
          }
      } 
    } else {
      if(cantidad <= 0){
        console.log("Ingreso un 0 en producto dif")
        setCart([...cart])
        setTotal(total)
      } else {
        item.quantity = cantidad
        setCart([item, ...cart])
        setProductsInCart(productsInCart + item.quantity)
        setTotal(item.price * item.quantity + total);
      }
    }
  };

  const isInCart = (itemId) => {
    const repeatedProduct = cart.find((product) => product.id === itemId)
    //console.log(repeatedProduct)
    return repeatedProduct
  }

  const removeItem = (item) => {
    console.log("itemId", item.id)
    const itemToRemove = cart.filter(product => product.id != item.id)
    if(itemToRemove){
      setCart([...itemToRemove])
      setTotal(total - item.price * item.quantity)
      setProductsInCart(productsInCart - item.quantity)
    }
    
  }

  const clearCart = (cart) => {
    console.log('Cart', cart)
    setCart([])
    setTotal(0)
    setProductsInCart(0)
  }

  return (
    <>
      <cartContext.Provider value={{ cart, addItemToCart, removeItem, clearCart, total, productsInCart}} >
        {children}
      </cartContext.Provider>
    </> 
  )
}

export default CartContextHOC;