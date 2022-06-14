
import { Box, Card, CardContent, CardMedia, Button, Typography } from '@mui/material';
import * as React from 'react';
import { useContext } from 'react';
import { cartContext } from '../context/CartContextHOC';
import Loading from '../Loading/Loading';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import  ShoppingCartIcon  from '@mui/icons-material/ShoppingCart';
import GenericError from './../Error/GenericError';
function ItemDetail({product, loading}) {
   // function onAdd(cantidad){
  //   console.log("cantidad", cantidad)
  //   alert("Se agregaron" + " " + cantidad + " " + " productos al carrito")
  // }
  const {addItemToCart } = useContext(cartContext)
  // console.log("product", product)
  
  return (
    <>
    {loading ? 
      <Loading />
      :
      product.length !== 0 ?
      <Box sx={{mt: 8}}>
      <Button startIcon={<ShoppingCartIcon />} sx={{mt: 1, ml: 2 }} variant="contained" color="success"><Link to={"/"} style={{textDecoration: "none", color:"#fff"}}>Seguir comprando</Link></Button>
      <Box flexWrap="wrap" sx={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", alignContent: "center"}}>
        <Card sx={{ width: "80%", bgcolor: "#000", mx: 1, my: 2}}>
          <CardMedia component="img" sx={{height:"60%", width:"100%"}} src={product.pictureUrl} />
          <CardContent sx={{textAlign: "center"}}>
            <Typography gutterBottom variant="h5" component="div" sx={{color: "#94ff8f", display:"block", fontWeight: "700"}}>{product.title}</Typography>
            <Typography gutterBottom variant="h7" sx={{color: "#fff", display: "block"}}><Typography variant="h6" sx={{fontWeight: "600"}}>Ingredientes:</Typography> {product.description}</Typography>
            <Typography gutterBottom variant='h6' sx={{color: "#fff", display:"block", fontWeight: "700"}}>${product.price}</Typography>
          </CardContent>
        </Card>
        <ItemCount stock={product.stock} initial={1} addItemToCart={addItemToCart} product={product} sx={{display: "flex", alignContent: "center"}}/>
      </Box>
      </Box> 
      : <GenericError message={"Error al cargar el detalle del producto"} />
    }
   
    </>
  )
}

export default ItemDetail