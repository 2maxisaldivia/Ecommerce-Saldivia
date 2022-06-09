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
import Categories from './Categories';
import { Link } from "react-router-dom";
import { cartContext } from "../context/CartContextHOC";
import Logo from "../images/Logo.png";
import CartWidget from "./CartWidget";

// import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

function NavBar() {
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
        <AppBar
        className='SSSSS'
          sx={{ 
            backgroundColor : "#000",
          }} 
          position="static"
          >

          <Toolbar sx={{justifyContent: "space-between"}}>

            <Box>
              <StyledButton>
                <Link to={"/"}> 
                  <img style={{width: "5rem",}} src={Logo}/> 
                </Link>
              </StyledButton>
            </Box>

            <Box sx={{ display:"flex"}}>

              <Categories />
              <StyledButton>
                <Link to={"/cart"}>
                  <CartWidget numberCart={[cart.length]} />
                </Link>
              </StyledButton>

            </Box>
             

          </Toolbar>
        </AppBar>
    </>  
    )
} 
export default NavBar;

{/* {Botones iniciar sesion y registrarse.} */}

          {/* <Button color="inherit">  
            <ExitToAppIcon  />
            <div style={colorStyle}>Iniciar Sesion</div> 
          </Button>

          <Button color="inherit">
            <PersonAddAltIcon  />
            <div style={colorStyle}>Registrarse</div>
            </Button> */}