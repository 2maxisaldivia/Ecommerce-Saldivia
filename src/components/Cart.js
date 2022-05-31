import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from './context/CartContextHOC';


function Cart() {
  const {cart, removeItem, clearCart, total} = useContext(cartContext)
  console.log("cart del cart", cart)

  return (
    <> 
    <div>Cart</div> 
    <h1>Precio total: {total}</h1>
    {cart.length == 0 ? 
    <div>
    <h3>Aun no agregaste nada al carrito</h3>
    <Button sx={{color: "#94ff8f", borderColor: "#94ff8f", marginBottom: ".5rem", bgcolor:"#000"}} variant="contained"><Link style={{textDecoration: "none", color:"#94ff8f"}} to={"/"}>Ir a comprar</Link></Button>
    </div>
    : 
    <Button onClick={()=> clearCart(cart)} variant="contained" color="error">Eliminar todos los productos</Button>} 
    
    {cart.map((product) =>{
      return(
        <> 
        <Card sx={{ maxWidth: 300, m: 4, bgcolor:"#000"}}>
          <CardMedia component="img" sx={{height:"150px", width:"300px"}} src={product.pictureUrl} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="#fff">{product.title}</Typography>
            <h4 style={{color: "#fff"}}>${product.price}</h4>
            <h4 style={{color: "#fff"}}>quantity: {product.quantity}</h4>
            <h4 style={{color: "#fff"}}>id: {product.id}</h4>
            <Button sx={{color: "#94ff8f", borderColor: "#94ff8f", marginBottom: ".5rem"}} variant="outlined">Finalizar compra</Button>
            <Button  onClick={() => removeItem(product)} variant="outlined" color="error">Eliminar producto</Button>
          </CardContent>
        </Card>
        </>
        
      )
    } 
    
    )}
    </>
   
  )
}

export default Cart