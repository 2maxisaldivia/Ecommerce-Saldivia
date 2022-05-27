import React, {useContext} from 'react'
import { cartContext } from './context/CartContextHOC'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Cart() {
  const {cart} = useContext(cartContext)
  console.log("cart del cart", cart)
  return (
    <> 
    <div>Cart</div>
    {cart.map((product) =>{
      return(
        <Card sx={{ maxWidth: 300, margin: 4, backgroundColor:"#000"}}>
          <CardMedia component="img" sx={{height:"150px", width:"300px"}} src={product.pictureUrl} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="#fff">{product.title}</Typography>
            <h4 style={{color: "#fff"}}>${product.price}</h4>
          </CardContent>
      </Card> 
      )
    } 
    
    )}
    </>
   
  )
}

export default Cart