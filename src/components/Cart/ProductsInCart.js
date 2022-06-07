import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../context/CartContextHOC';
import { Button } from 'bootstrap';
import { styled } from '@mui/material/styles';
import DeleteProduct from './DeleteProduct';
import { Box } from '@mui/system';

function ProductsInCart({product}) {
    const {cart, clearCart, total} = useContext(cartContext)
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
    console.log("product", product)
    return (
      <Box sx={{left: "40%"}}>
        <Card sx={{ width: "80%", mx: 3, my: 2, bgcolor: "#000"}}>
          <CardMedia component="img" sx={{height:"150px", width:"300px"}} src={product.pictureUrl} />
          <CardContent sx={{textAlign: "center"}}>
            <Typography gutterBottom variant="h5" component="div" sx={{color: "#fff", display:"block", fontWeight: "700"}}>{product.title}</Typography>
            
            <Typography gutterBottom variant='h7' sx={{color: "#fff", display:"block", fontWeight: "700", mb: 1}}>SubTotal: ${product.price}</Typography>
            <DeleteProduct product={product} />
          </CardContent>
        </Card> 
      </Box>
    )
}

export default ProductsInCart