import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Button } from 'bootstrap';
import { styled } from '@mui/material/styles';
import DeleteProduct from './DeleteProduct';



function ProductsInCart({product}) {
   
    
    const StyledButton = styled(Button)({
        '&:hover': {
          backgroundColor: '#272727',
          borderColor: '#94ff8f',
          boxShadow: 'none',
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: '#272727',
          borderColor: '#94ff8f',
        },
        '&:focus': {
          boxShadow: '0 0 0 0.2rem rgba(0,22,21,.2)',
        },
      });
    //console.log("product", product)
    return (
        <Card 
          sx={{ 
            width: "80%", 
            bgcolor: "#000"
          }}
        >
          <CardMedia 
            component="img" 
            sx={{height:"150px", width:"100%"}} 
            src={product.pictureUrl} 
          />
          <CardContent 
            sx={{textAlign: "center"}} 
          >
            <Typography 
              gutterBottom 
              variant="h5" 
              component="div" 
              sx={{
                color: "#94ff8f", 
                display:"block", 
                fontWeight: "700"
              }}>
                {product.title}
            </Typography>
            <Typography 
              gutterBottom 
              variant='h7' 
              sx={{
                color: "#fff", 
                display:"block", 
                fontWeight: "700", 
                mb: 1
                }}
              >
                Precio unitario: ${product.price}
                
            </Typography>
            <Typography 
              gutterBottom 
              variant='h7' 
              sx={{
                color: "#fff", 
                display:"block", 
                fontWeight: "700", 
                mb: 1
                }}
              >
                  Cantidad: {product.quantity}
            </Typography>
            <Typography 
              gutterBottom 
              variant='h6' 
              sx={{
                color: "#94ff8f", 
                display:"block", 
                fontWeight: "700", 
                mb: 1
                }}
              >
                  Precio total: ${product.quantity * product.price}
            </Typography>
            <DeleteProduct product={product} />
          </CardContent>
        </Card>
    )
}

export default ProductsInCart