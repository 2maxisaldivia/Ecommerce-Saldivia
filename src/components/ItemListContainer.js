import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ItemListContainer({nombre, precio, descripcion}) {
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
        <Typography gutterBottom variant="h5" component="div" color="#fff">${precio}</Typography>
      </CardContent>
    </Card>
    </>
  )
}

export default ItemListContainer