import React from 'react'
import { Button } from '@mui/material'
import { useContext } from 'react'
import { cartContext } from '../context/CartContextHOC';

export default function DeleteProduct({product}) {
    const {removeItem} = useContext(cartContext)
    return (
        <Button onClick={()=> removeItem(product)} variant="outlined" color="error">Eliminar este producto</Button>
    )
}
