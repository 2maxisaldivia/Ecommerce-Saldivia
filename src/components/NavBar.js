import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

function NavBar() {

    const logoStyles = {
        width: "7rem",
    }
    
    const appBarStyles = {
        backgroundColor : "#000"
    }

    return(
        <>
       
      <AppBar style={appBarStyles} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >

          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img style={logoStyles} src='./images/logo-app.png'></img>
          </Typography>
          <Button color="inherit">Productos</Button>
          <Button color="inherit">  Iniciar Sesion </Button>
          <Button color="inherit">Registrarse</Button>
        </Toolbar>
      </AppBar>
    </>
           
    )
}
export default NavBar;