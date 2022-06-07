// @ts-check
import Button from '@mui/material/Button';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../context/CartContextHOC';
import EmptyCart from './EmptyCart';
import DeleteIcon from '@mui/icons-material/Delete';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ProductsInCart from './ProductsInCart';
import { Box } from '@mui/system';
import ABProducts from './ABProducts';

function Cart() {
  
  const {cart, removeItem, clearCart, total} = useContext(cartContext)
  console.log("cart del cart", cart)

  return (
    <> 
      {cart.length == 0 ? 
      <>
        <EmptyCart />
      </>
      :
      <Box className="AAAA" sx={{position: 'absolute', left: "7%", top:"10%" }}>
      {cart.map((product) => <Box><ProductsInCart product={product} key={product.id} /></Box>)}
      <ABProducts />
      </Box>
     
    }
    </>
   
  )
}

export default Cart