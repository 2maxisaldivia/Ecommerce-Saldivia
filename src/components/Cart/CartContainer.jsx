// @ts-check
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../context/CartContextHOC';
import EmptyCart from './EmptyCart';
import ProductsInCart from './ProductsInCart';
import { Box } from '@mui/system';
import ABProducts from './ABProducts';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartContainer() {
  
  const { cart, total } = useContext(cartContext)
  //console.log("cart del cart", cart)

  return (
    <> 
      {cart.length == 0 ? 
      <>
        <EmptyCart />
      </>
      :
      <Box className="OOOOOOOO" sx={{position: 'absolute', left: "7%"}}>
        <Button startIcon={<ShoppingCartIcon />} sx={{mt: 1, }} variant="contained" color="success"><Link to={"/"} style={{textDecoration: "none", color:"#fff"}}>Seguir comprando</Link></Button>
        {cart.map((product) => <Box><ProductsInCart product={product} key={product.id} /></Box>)}
        <Box sx={{mb: 2, bgcolor: "#000", color: "#fff", borderRadius: "2.5%", width: "93%", mr: 20}}>
          <Typography variant='h6' sx={{fontWeight: 700, textAlign: "center"}}> Total: $ {total} </Typography>
        </Box>
          <ABProducts />
      </Box>
     
    }
    </>
   
  )
}

export default CartContainer