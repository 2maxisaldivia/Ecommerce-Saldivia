// @ts-check
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../context/CartContextHOC';
import EmptyCart from './EmptyCart';
import ProductsInCart from './ProductsInCart';
import { Box } from '@mui/system';
import ABProducts from './ABProducts';
import { Typography } from '@mui/material';

function CartContainer() {
  
  const { cart, total } = useContext(cartContext)
  console.log("cart del cart", cart)

  return (
    <> 
      {cart.length == 0 ? 
      <>
        <EmptyCart />
      </>
      :
      <Box sx={{position: 'absolute', left: "7%", top:"10%" }}>
        {cart.map((product) => <Box><ProductsInCart product={product} key={product.id} /></Box>)}
        <Box sx={{mb: 2, ml: 3, bgcolor: "#000", color: "#fff", borderRadius: "2.5%", width: "80%", left: "45%"}}>
          <Typography variant='h6' sx={{fontWeight: 700, textAlign: "center"}}> Total: $ {total} </Typography>
        </Box>
        <ABProducts />
      </Box>
     
    }
    </>
   
  )
}

export default CartContainer