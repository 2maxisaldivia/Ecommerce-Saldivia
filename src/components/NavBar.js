import React from "react"
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton}  from '@mui/material';
import CartWidget from "./CartWidget";
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
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

          <Button color="inherit">  
            <LocalPizzaIcon  />
            <div style={{color:"#94ff8f", padding: "0.2rem"}}>Pizzas</div> 
          </Button>

          <Button color="inherit">
            <LunchDiningIcon  />
            <div style={{color:"#94ff8f", padding: "0.2rem"}}>Hamburguesas</div>
          </Button>

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