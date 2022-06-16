
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import MenuBookIcon from '@mui/icons-material/MenuBook';

import { Grid } from '@mui/material';

function Item({product}) {

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

  return (
    <Grid 
      className='grid-item' 
      item 
      xs={12} sm={6} md={4} lg={3} 
      align="center" 
      marginBottom={3}
    >
      <Card 
        sx={{ 
          width: "80%", 
          bgcolor: "#000"
        }}>
          <CardMedia 
            component="img" 
            sx={{
              height:"150px", 
              width:"100%"
            }} 
            src={product.pictureUrl} 
          />
          <CardContent 
            sx={{
              textAlign: "center"
              }}
            >
              <Typography 
                gutterBottom 
                variant="h5"
                component="div" 
                sx={{
                  color: "#fff", 
                  display:"block", 
                  fontWeight: "700"
                  }}
                >
                  {product.title}
              </Typography>
              <Typography 
                gutterBottom 
                variant="h6" 
                sx={{
                  color: "#fff",
                  display: "block"
                  }}
              >
                Stock: {product.stock}
              </Typography>
              <Typography 
                gutterBottom 
                variant='h6' 
                sx={{
                  color: "#fff", 
                  display:"block", 
                  fontWeight: "700"
                  }}
                >
                  ${product.price}
                </Typography>
                <StyledButton 
                sx={{
                  color: "#94ff8f",
                  borderColor: "#94ff8f"
                  }} 
                  variant="outlined"
                  startIcon={<MenuBookIcon />}>
                    <Link 
                      style={{textDecoration: "none", color:"#94ff8f"}} 
                      to={"/item/"+product.id}>
                        detalle del producto
                    </Link>
                </StyledButton>
          </CardContent>
      </Card> 
    </Grid>
  )
}
export default Item;