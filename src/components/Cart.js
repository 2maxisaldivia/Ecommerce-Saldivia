import React, {useContext} from 'react'
import { cartContext } from './context/CartContextHOC'
function Cart() {
  const {cart} = useContext(cartContext)
  console.log("cart del cart", cart)
  return (
    <> 
    <div>Cart</div>
    {cart.map((item) => <p>{item.title}</p>)}
    </>
   
  )
}

export default Cart