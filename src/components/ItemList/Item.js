import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Item({product}) {
  const buttonStyles = {
    color: "#94ff8f",
    borderColor: "#94ff8f"
  }

  return (
    <>
    <Card sx={{ maxWidth: 300, margin: 3, backgroundColor:"#000", }}>
      <CardMedia component="img" height="140" src={product.pictureUrl} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="#fff">{product.title}</Typography>
        <Typography variant="body2" color="#fff">{product.description}</Typography>
        <h4 style={{color: "#fff"}}>${product.price}</h4>
        <Button style={buttonStyles} variant="outlined">Añadir al carrito</Button>
      </CardContent>

    </Card> 
   
    </>
  )
}

export default Item
