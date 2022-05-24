
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from './../ItemCount';
import { useContext } from 'react';
import { cartContext } from '../context/CartContextHOC';
function ItemDetail({product}) {
   // function onAdd(cantidad){
  //   console.log("cantidad", cantidad)
  //   alert("Se agregaron" + " " + cantidad + " " + " productos al carrito")
  // }
  const {addToCart} = useContext(cartContext)

  return (
    <>
      <Card sx={{ display: 'flex', width:"70%", height: "100%", marginTop:"3%", marginLeft: "15%", backgroundColor:"#000" }}>
        <Box sx={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)"}}>
            <Box>
            <Typography sx={{display: "flex", paddingLeft: "5%",color: "#94ff8f", fontSize:"50pt", fontWeight:"700"}} component="div" variant="h6">
                {product.title}
            </Typography>
            <CardMedia component="img" sx={{width: 600, height: 300, paddingLeft: "5%" }} image={product.pictureUrl} />
            <Typography sx={{display: "flex", paddingLeft:"5%", color: "#94ff8f", fontSize: "35pt", fontWeight:"700"}} variant="subtitle1" component="div">
                SubTotal: ${product.price}
            </Typography>
          </Box>

          <Box sx={{display:"flex", width: "100%", paddingTop: "14%"}}>
            <CardContent sx={{width: "100%", marginLeft: "7%"}}>
              <Typography sx={{display: "flex", justifyContent: "flex-start", color: "#94ff8f", fontSize: "20pt", fontWeight:"600", textAlign: "right", textDecoration: "underline"}} variant="subtitle1" component="div">
                  Ingredientes:
              </Typography>
              <Typography sx={{display: "flex", color: "#94ff8f", fontSize: "20pt", fontWeight:"300"}} variant="subtitle1" component="div">
                  {product.description}
              </Typography>
              <ItemCount stock={5} initial={0} onAdd={() => addToCart(product)} sx={{display: "flex", alignContent: "center"}}/>
            </CardContent>
            
          </Box>
        </Box>
        
    </Card>
    </>
  )
}

export default ItemDetail