
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from './../context/CartContextHOC';
import ItemCount from './../ItemDetail/ItemCount';

function Item({product}) {
  const  {addItemToCart} = useContext(cartContext)

  return (
    <>
      <Card sx={{ maxWidth: 300, margin: 4, mb: 2, backgroundColor:"#000"}}>
      <CardMedia component="img" sx={{height:"150px", width:"300px"}} src={product.pictureUrl} />
      <CardContent sx={{textAlign: "center"}}>
        <Typography gutterBottom variant="h5" component="div" color="#fff">{product.title}</Typography>
        <h4 style={{color: "#fff"}}>Stock disponible: {product.quantity === undefined ? product.stock :  product.stock - product.quantity}</h4>
        <h3 style={{color: "#fff"}}>${product.price}</h3>
        <Button sx={{color: "#94ff8f", borderColor: "#94ff8f", marginBottom: ".5rem"}} variant="outlined"><Link style={{textDecoration: "none", color:"#94ff8f"}} to={"/item/"+product.id}>detalle del producto</Link></Button>
        <ItemCount stock={product.quantity === undefined ? product.stock : product.stock - product.quantity} initial={0} addItemToCart={addItemToCart} product={product} sx={{display: "flex", alignContent: "center"}}/>
      </CardContent>
      </Card> 
    </>
  )
}
export default Item;