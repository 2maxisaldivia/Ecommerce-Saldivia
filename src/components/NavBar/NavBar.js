// @ts-check
import React, { useContext } from "react"
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button,
  Box}  from '@mui/material';
import Logo from "../images/Logo.png"
import CartWidget from "./CartWidget";
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import BrunchDiningIcon from '@mui/icons-material/BrunchDining';
import { Link } from "react-router-dom";
import { cartContext } from "../context/CartContextHOC";
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

export default function NavBar() {
    const {cart} = useContext(cartContext)
    return(
        <>  
      <AppBar sx={{ backgroundColor : "#000"}} position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          
            <Link to={"/"}> <img style={{width: "7rem",}} src={Logo}/> </Link>
          
          </Typography>
          

          <Link style={{textDecoration: "none", color: "#fff"}} to="/category/lomos">
            <Button color="inherit">
              <BrunchDiningIcon />
              <Box style={{color:"#94ff8f", padding: "0.2rem"}}>Lomos</Box>
            </Button>
          </Link>

          <Link style={{textDecoration: "none", color: "#fff"}} to={"/category/pizzas"}>
            <Button color="inherit">  
              <LocalPizzaIcon  />
              <Box style={{color:"#94ff8f", padding: "0.2rem"}}>Pizzas</Box> 
            </Button>
          </Link>
          
          <Link style={{textDecoration: "none", color: "#fff"}} to={"/category/hamburguesas"}>
            <Button color="inherit">
              <LunchDiningIcon  />
              <Box style={{color:"#94ff8f", padding: "0.2rem"}}>Hamburguesas</Box>
            </Button>
          </Link>
          

          {/* {Botones iniciar sesion y registrarse.} */}

          {/* <Button color="inherit">  
            <ExitToAppIcon  />
            <div style={colorStyle}>Iniciar Sesion</div> 
          </Button>

          <Button color="inherit">
            <PersonAddAltIcon  />
            <div style={colorStyle}>Registrarse</div>
            </Button> */}
          <Link to={"/cart"}>
            <CartWidget numberCart={[cart.length]} />
          </Link>
          
            
        </Toolbar>
      </AppBar>
    </>  
    )
}