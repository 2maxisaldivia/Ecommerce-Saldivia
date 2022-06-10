import React from 'react'
import { Box, Button, Typography} from "@mui/material";
import { Link } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import styled from "@emotion/styled";

function CheckoutSuccessfullPurchase({id}) {
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
        <>
        <Box>
            <Box sx={{width: "98%", height: "200px", bgcolor: "#94ff8f", justifyContent: "center", ml: .5, mt: 1}}>
                <Typography variant="h5" sx={{color: "#000", textAlign: "center", pt: 4, fontWeight: 500, px: 4}}> ¡Su compra se ha generado de forma exitosa! </Typography>
                <CheckCircleOutlineIcon sx={{ml: "43%", fontSize: 60, mt: 2}}/>
            </Box>
            <Box sx={{height: "200px", bgcolor: "#f4f4f4", my: 1, width:"98%", ml:.5}}>
                <LocalShippingIcon  sx={{ml: "43%", fontSize: 60, pt: 4}}/>
            <Typography sx={{textAlign: "center", px: 5}}>Los productos ya están viajando, le avisaremos cuando esten llegando</Typography>
            </Box>
            <Box sx={{height: "200px", bgcolor: "#fafafa", my: 1, width:"98%", ml:.5}}>
                <ShoppingBagIcon sx={{ml: "43%", fontSize: 60, pt: 4}}/>
                <Typography sx={{textAlign: "center", px: 7}}> El número de identificación de su compra es <em>{id}</em>, téngalo a mano, lo necesitará</Typography>
            </Box>
            <Box>
                <StyledButton variant="contained" color="success" sx={{left: "25%", mb: 2}}><Link to={"/"} style={{textDecoration: "none", color: "#fff"}}>Seguir comprando</Link></StyledButton>
            </Box>
        </Box>
        </>
    )
}

export default CheckoutSuccessfullPurchase