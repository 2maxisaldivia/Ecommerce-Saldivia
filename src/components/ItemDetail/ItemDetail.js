
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useContext } from 'react';
import { cartContext } from '../context/CartContextHOC';
import Loading from '../Loading/Loading';
import ItemCount from './ItemCount';
function ItemDetail({product, loading}) {
   // function onAdd(cantidad){
  //   console.log("cantidad", cantidad)
  //   alert("Se agregaron" + " " + cantidad + " " + " productos al carrito")
  // }
  const {addItemToCart} = useContext(cartContext)

  console.log("product", product)
  return (
    <>
    {loading ? 
      <Loading />
      :
      product.length !== 0 ? 
        <Card sx={{ display: 'flex', width:"70%", height: "100%", marginTop:"3%", marginLeft: "15%", backgroundColor:"#000" }}>
          <Box  sx={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)"}}>
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
                <ItemCount stock={product.stock} initial={0} addItemToCart={addItemToCart} product={product} sx={{display: "flex", alignContent: "center"}}/>
              </CardContent>
            </Box>
          </Box>
          
      </Card>
      : "Hay error"
    }
   
    </>
  )
}

export default ItemDetail