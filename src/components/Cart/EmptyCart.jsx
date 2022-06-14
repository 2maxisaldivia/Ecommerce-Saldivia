import React from 'react'
import {Typography, Box, Button }  from '@mui/material';
import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <Box 
        sx={{
            width: "100%",
            mt: 9
        }}>
        <Box
        sx={{justifyItems: "center"}}>

            <Typography 
                variant="h5" 
                component="div"
                sx={{
                    textAlign: "center",
                    mt: 3
                }}
                > 
                Tu Carrito está vacio
            </Typography>
            <Typography 
                variant="h7" 
                component="div"
                sx={{
                    textAlign: "center",
                    mb: 3
                }}
                > 
                ¿No sabes que comprar?
                Presioná aquí abajo
            </Typography>
            
            <Button 
                sx={{
                    color: "#94ff8f", 
                    borderColor: "#94ff8f", 
                    marginBottom: ".5rem", 
                    bgcolor:"#000",
                    alignSelf: "center",
                    position: "absolute",
                    left: "30%"
                }} 
                variant="contained">
                    <Link style={{textDecoration: "none", color:"#94ff8f"}} to={"/"}>
                        Ir a comprar
                    </Link>
            </Button>
        </Box>
    </Box>

  )
}

export default EmptyCart