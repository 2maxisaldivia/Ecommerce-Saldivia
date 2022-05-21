import React, {useEffect} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function Item({product}) {
  
  
  return (
    <>
      <Card sx={{ maxWidth: 300, margin: 4, backgroundColor:"#000"}}>
      <CardMedia component="img" sx={{height:"150px", width:"300px"}} src={product.pictureUrl} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="#fff">{product.title}</Typography>
        <h4 style={{color: "#fff"}}>${product.price}</h4>
        <Button style={{color: "#94ff8f", borderColor: "#94ff8f", marginBottom: ".5rem"}} variant="outlined"><Link style={{textDecoration: "none", color:"#94ff8f"}} to={"/item/"+product.id}>Ver detalle</Link></Button>
      </CardContent>
      </Card> 
    </>
  )
}

export default Item
