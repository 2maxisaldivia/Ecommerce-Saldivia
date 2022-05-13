import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ItemCount from './ItemCount';

function ItemListContainer({nombre, precio, descripcion}) {
  const buttonStyles = {
    color: "#94ff8f",
    borderColor: "#94ff8f"
  }
  return (
    <>
    <Card sx={{ maxWidth: 200, margin: 3, backgroundColor:"#000"}}>
      <CardMedia
        component="img"
        height="140"
        src='./images/img-lomo.jpg'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="#fff">
        {nombre}
        </Typography>
        <Typography variant="body2" color="#fff">{descripcion}</Typography>
        <h4 style={{color: "#fff"}}>${precio}</h4>
        <ItemCount stock={5} initial={0} />
        <Button style={buttonStyles} variant="outlined">Añadir al carrito</Button>
      </CardContent>

    </Card>
    </>
  )
}
export default ItemListContainer