import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { cartContext } from '../context/CartContextHOC';

import CreditCardIcon from '@mui/icons-material/CreditCard';
import DeleteIcon from '@mui/icons-material/Delete';

function ABProducts() {
    const {cart, clearCart } = useContext(cartContext)
    return (
        <>
        <Button startIcon={< CreditCardIcon/>} sx={{mb: 1, }} variant="contained" color="success"><Link to={"/checkout"} style={{textDecoration: "none", color:"#fff"}}>Finalizar compra</Link></Button>
        <Button startIcon={< DeleteIcon/>} onClick={()=> clearCart(cart)} sx={{mb: 3}} variant="contained" color="error" >Eliminar todos los productos</Button>
        </>
    )
}

export default ABProducts