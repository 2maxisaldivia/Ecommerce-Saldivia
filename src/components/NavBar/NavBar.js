// @ts-check
import BrunchDiningIcon from '@mui/icons-material/BrunchDining';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import {
    AppBar, Box, Button, Toolbar,
    Typography
} from '@mui/material';
import React, { useContext } from "react";
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import { cartContext } from "../context/CartContextHOC";
import Logo from "../images/Logo.png";
import CartWidget from "./CartWidget";
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { IconButton } from '@mui/material';

export default function NavBar() {
    const {cart} = useContext(cartContext)

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

    return(
        <>  
      <AppBar sx={{ backgroundColor : "#000"}} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> 
            <Link to={"/"}> <img style={{width: "7rem",}} src={Logo}/> </Link>
          </Typography>
          
            <StyledButton
              sx={{backgroundColor: "#000", color: "#fff"}}
              variant='contained'
              startIcon={<BrunchDiningIcon />}
            > 
              <Link style={{textDecoration: "none", color: "#94ff8f"}} to="/category/lomos">
                Lomos
              </Link>
            </StyledButton>

            <StyledButton
              sx={{backgroundColor: "#000", color: "#fff"}}
              variant='contained'
              startIcon={<LocalPizzaIcon />}
              > 
              <Link style={{textDecoration: "none", color: "#94ff8f"}} to="/category/pizzas">
                Pizzas
              </Link>
            </StyledButton>

            <StyledButton
              sx={{backgroundColor: "#000", color: "#fff"}}
              variant='contained'
              startIcon={<LunchDiningIcon />}
            > 
              <Link style={{textDecoration: "none", color: "#94ff8f"}} to="/category/hamburguesas">
                Hamburguesas
              </Link>
            </StyledButton>

          {/* {Botones iniciar sesion y registrarse.} */}

          {/* <Button color="inherit">  
            <ExitToAppIcon  />
            <div style={colorStyle}>Iniciar Sesion</div> 
          </Button>

          <Button color="inherit">
            <PersonAddAltIcon  />
            <div style={colorStyle}>Registrarse</div>
            </Button> */}
            <StyledButton>
              <Link to={"/cart"}>
                <CartWidget numberCart={[cart.length]} />
              </Link>
            </StyledButton>
        
        </Toolbar>
      </AppBar>
    </>  
    )
}