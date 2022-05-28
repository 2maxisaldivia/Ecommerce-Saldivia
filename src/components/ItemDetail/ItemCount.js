// @ts-check
import React, { useState, useContext} from 'react'
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { cartContext } from '../context/CartContextHOC';

function ItemCount({stock, initial, addItemToCart, product}) {
    
    const [count, setCount] = useState(initial);
    console.log("count", count)
    

    return (
        <Box sx={{display:"flex", justifyContent: "right", paddingTop: "30%", paddingBottom: "0%", paddingRight:"4%"}}>
        <ButtonGroup disableElevation variant="contained" sx={{marginLeft: "2%", width: "8rem", marginRight: "1rem"}}>
            <IconButton onClick={() => setCount(count > initial ? count - 1 : count)} sx={{backgroundColor: "#272727", color: "#94ff8f", borderColor: "#000"}}> <RemoveIcon /> </IconButton>
            <Box sx={{fontSize: "18pt", color: "#fff", width: "100%", textAlign: "center",}}>{count}</Box>
            <IconButton onClick={()=> setCount(count < stock ? count + 1 : count)} sx={{backgroundColor: "#272727", color: "#94ff8f", borderColor: "#000"}}> <AddIcon/> </IconButton>
        </ButtonGroup >
        <Button onClick={()=> addItemToCart(product, count)} sx={{color: "#94ff8f", borderColor: "#94ff8f"}} variant="outlined">Añadir al carrito</Button>
        </Box>
    )
}

export default ItemCount;