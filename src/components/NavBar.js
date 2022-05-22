import React from "react"
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button,
  Box}  from '@mui/material';
import CartWidget from "./CartWidget";
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import BrunchDiningIcon from '@mui/icons-material/BrunchDining';
import { Link } from "react-router-dom";
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

export default function NavBar() {

    return(
        <>  
      <AppBar sx={{ backgroundColor : "#000"}} position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          
          <Link to={"/"}> <img style={{width: "7rem",}} src='./images/logo-app.png'/> </Link>
          
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

          <CartWidget numberCart={15} />

        </Toolbar>
      </AppBar>
    </>  
    )
}