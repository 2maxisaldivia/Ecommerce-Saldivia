// @ts-check
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button, ButtonGroup, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

function ItemCount({stock, initial, addItemToCart, product}) {
    
    const [count, setCount] = useState(initial);
    const [goToCart, setGoToCart] = useState(false)

    const onAdd = () => {
        addItemToCart(product, count)
        if(count > 0){
        setGoToCart(true)
        }
    }

    // console.log("count", count)
    

    return (
        <Box>
            <Box sx={{marginTop: "10%"}}>
                <ButtonGroup disableElevation variant="contained" sx={{marginLeft: "2%", width: "8rem", marginRight: "1rem"}}>
                    <IconButton onClick={() => setCount(count > initial ? count - 1 : count)} sx={{backgroundColor: "#272727", color: "#94ff8f", borderColor: "#000"}} disabled={count === initial}> <RemoveIcon /> </IconButton>
                    <Box sx={{fontSize: "18pt", color: "#fff", width: "100%", textAlign: "center",}}>{count}</Box>
                    <IconButton onClick={()=> setCount(count < stock ? count + 1 : count)} sx={{backgroundColor: "#272727", color: "#94ff8f", borderColor: "#000"}} disabled={count === stock}> <AddIcon/> </IconButton>
                </ButtonGroup >
            </Box>
            {goToCart ?
            <Button sx={{color: "#94ff8f", borderColor: "#94ff8f", marginTop:"1rem"}} variant="outlined"> <Link to={"/cart"} style={{textDecoration: "none", color:"#94ff8f"}}> Finalizar la compra </Link></Button>
            :
            <Button onClick={()=> onAdd()} sx={{color: "#94ff8f", borderColor: "#94ff8f", marginTop:"1rem"}} variant="outlined" > Añadir al carrito </Button>}
        </Box>
    )
}

export default ItemCount;