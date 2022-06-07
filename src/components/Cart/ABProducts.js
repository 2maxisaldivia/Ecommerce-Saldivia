import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { cartContext } from './../context/CartContextHOC';
import { Typography } from '@mui/material';

function ABProducts() {
    const {cart, clearCart, total} = useContext(cartContext)
    return (
        <>
        <Typography variant='h6' sx={{fontWeight: 700}}> Total: {total} </Typography>
        <Button sx={{mb: 1}} variant="contained" color="success"><Link to={"/checkout"} style={{textDecoration: "none", color:"#fff"}}>Finalizar compra</Link></Button>
        <Button onClick={()=> clearCart(cart)} variant="contained" color="error" sx={{mb: 1}}>Eliminar todos los productos</Button>
        </>
    )
}

export default ABProducts