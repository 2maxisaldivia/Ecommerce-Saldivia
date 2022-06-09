
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
  const {addItemToCart } = useContext(cartContext)
  // console.log("product", product)
  
  return (
    <>
    {loading ? 
      <Loading />
      :
      product.length !== 0 ? 
      //   <Card 
      //     sx={{ 
      //       position: 'absolute', 
      //       width:"80%", 
      //       height: "85%", 
      //       top: "12.5%", 
      //       left: "10%", 
      //       bgcolor:"#000"
      //     }}>

      //     <Box sx={{display: "flex", flexDirection: "column"}}>
      //         <Box>
      //           <Typography sx={{display: "flex", paddingLeft: "5%",color: "#94ff8f", fontSize:"30pt", fontWeight:"700", textAlign: "center"}} component="div" variant="h6">
      //               {product.title}
      //           </Typography>
      //           <CardMedia component="img" sx={{width: "40%", height: "30%", paddingLeft: "5%" }} image={product.pictureUrl} />
      //           <Typography sx={{display: "flex", paddingLeft:"5%", color: "#94ff8f", fontSize: "20pt", fontWeight:"700"}} variant="subtitle1" component="div">
      //               SubTotal: ${product.price}
      //           </Typography>
      //         </Box>

      //         <Box sx={{display:"flex", flexWrap: "wrap", width: "100%"}}>
      //           <CardContent sx={{width: "100%", marginLeft: "7%"}}>
      //             <Typography sx={{display: "flex", justifyContent: "flex-start", color: "#94ff8f", fontSize: "20pt", fontWeight:"600", textAlign: "right", textDecoration: "underline"}} variant="subtitle1" component="div">
      //                 Ingredientes:
      //             </Typography>
      //             <Typography sx={{display: "flex", color: "#94ff8f", fontSize: "20pt", fontWeight:"300"}} component="div">
      //                 {product.description}
      //             </Typography>
      //             <ItemCount stock={product.stock} initial={0} addItemToCart={addItemToCart} product={product} sx={{display: "flex", alignContent: "center"}}/>
      //           </CardContent>
      //         </Box>
      //     </Box>   
      // </Card>
      <Box flexWrap="wrap" sx={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", alignContent: "center"}}>
        <Card sx={{ width: "60%", bgcolor: "#000", mx: 1, my: 2}}>
          <CardMedia component="img" sx={{height:"60%", width:"100%"}} src={product.pictureUrl} />
          <CardContent sx={{textAlign: "center"}}>
            <Typography gutterBottom variant="h5" component="div" sx={{color: "#94ff8f", display:"block", fontWeight: "700"}}>{product.title}</Typography>
            <Typography gutterBottom variant="h7" sx={{color: "#fff", display: "block"}}><Typography variant="h6" sx={{fontWeight: "600"}}>Ingredientes:</Typography> {product.description}</Typography>
            <Typography gutterBottom variant='h6' sx={{color: "#fff", display:"block", fontWeight: "700"}}>${product.price}</Typography>
          </CardContent>
        </Card>
        <ItemCount stock={product.stock} initial={0} addItemToCart={addItemToCart} product={product} sx={{display: "flex", alignContent: "center"}}/>
      </Box>
      : "Hay error"
    }
   
    </>
  )
}

export default ItemDetail