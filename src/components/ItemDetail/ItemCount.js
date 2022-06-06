// @ts-check
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button, ButtonGroup, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

function ItemCount({stock, initial, addItemToCart, product}) {
    
    const [count, setCount] = useState(initial);
    const [goToCart, setGoToCart] = useState(false)

    const onAdd = () => {
        addItemToCart(product, count)
        if(count > 0){
        setGoToCart(true)
        }
    }

    const StyledButton = styled(Button)({
        '&:hover': {
          backgroundColor: '#272727',
          borderColor: '#94ff8f',
          boxShadow: 'none',
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: '#272727',
          borderColor: '#94ff8f',
        },
        '&:focus': {
          boxShadow: '0 0 0 0.2rem rgba(0,22,21,.2)',
        },
      });

    // console.log("count", count)
    

    return (
        <Box>
            <Box sx={{marginTop: "10%"}}>
                <ButtonGroup disableElevation variant="contained" sx={{marginLeft: "2%", width: "8rem", marginRight: "1rem"}}>
                    <IconButton onClick={() => setCount(count > initial ? count - 1 : count)} sx={{backgroundColor: "#272727", color: "#94ff8f", borderColor: "#000"}} disabled={count < initial}> <RemoveIcon /> </IconButton>
                    <Box sx={{fontSize: "18pt", color: "#fff", width: "100%", textAlign: "center",}}>{count}</Box>
                    <IconButton onClick={()=> setCount(count < stock ? count + 1 : count)} sx={{backgroundColor: "#272727", color: "#94ff8f", borderColor: "#000"}} disabled={count === stock}> <AddIcon/> </IconButton>
                </ButtonGroup >
            </Box>
            {goToCart ?
            <StyledButton sx={{color: "#94ff8f", borderColor: "#94ff8f", marginTop:"1rem"}} variant="outlined"> <Link to={"/cart"} style={{textDecoration: "none", color:"#94ff8f"}}> Finalizar la compra </Link></StyledButton>
            :
            <StyledButton onClick={()=> onAdd()} sx={{color: "#94ff8f", borderColor: "#94ff8f", marginTop:"1rem"}} variant="outlined" > Añadir al carrito </StyledButton>}
        </Box>
    )
}

export default ItemCount;