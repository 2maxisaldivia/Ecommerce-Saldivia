
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from './../context/CartContextHOC';
import ItemCount from './../ItemDetail/ItemCount';
import { styled } from '@mui/material/styles';

function Item({product}) {
  
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

  return (
    <>
      <Card sx={{ maxWidth: 300, margin: 4, mb: 2, backgroundColor:"#000"}}>
        <CardMedia component="img" sx={{height:"150px", width:"300px"}} src={product.pictureUrl} />
        <CardContent sx={{textAlign: "center"}}>
          <Typography gutterBottom variant="h5" component="div" color="#fff">{product.title}</Typography>
          <h4 style={{color: "#fff"}}>Stock disponible: {product.stock}</h4>
          <h3 style={{color: "#fff"}}>${product.price}</h3>
          <StyledButton sx={{color: "#94ff8f", borderColor: "#94ff8f", marginBottom: ".5rem"}} variant="outlined"><Link style={{textDecoration: "none", color:"#94ff8f"}} to={"/item/"+product.id}>detalle del producto</Link></StyledButton>
        </CardContent>
      </Card> 
    </>
  )
}
export default Item;