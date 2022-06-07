import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import BrunchDiningIcon from '@mui/icons-material/BrunchDining';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import {MenuItem, Typography} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Categories() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
    <div>
      <StyledButton
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<ArrowDropDownIcon />}
        sx={{color: "#94ff8f"}}
      >
          <Typography sx={{fontWeight: 600, alignContent: "center", paddingTop: ".1rem"}}>
            Categorías
          </Typography>
      </StyledButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{textAlign: "center"}}
      >
        <MenuItem>
        <StyledButton
            sx={{
              backgroundColor: "#000", 
              color: "#fff",
            }}
            variant='contained'
            startIcon={<BrunchDiningIcon />}
            onClick={handleClose}
            > 
            <Link 
                style={{
                  textDecoration: "none", 
                  color: "#94ff8f"
                }} 
                to="/category/lomos"
                >
                <Typography> 
                Lomos 
                </Typography>
            </Link>
        </StyledButton>
        </MenuItem>
            
        <MenuItem>

        <StyledButton
            sx={{
              backgroundColor: "#000", 
              color: "#fff",
            }}
            variant='contained'
            onClick={handleClose}
            startIcon={<LocalPizzaIcon />}
            > 
            <Link 
            style={{
              textDecoration: "none", 
              color: "#94ff8f"
            }} 
            to="/category/pizzas"
            >
                <Typography> 
                Pizzas
                </Typography>
            </Link>
        </StyledButton>
        </MenuItem>
        <MenuItem>
        <StyledButton
        sx={{
          backgroundColor: "#000",
          color: "#fff",
        }}
        variant='contained'
        onClick={handleClose}
        startIcon={<LunchDiningIcon />}
        > 
        <Link 
            style={{
              textDecoration: "none", 
              color: "#94ff8f",
              
            }} 
            to="/category/hamburguesas">
            <Typography> 
            Hamburguesas 
            </Typography>
        </Link>
        </StyledButton> 
        </MenuItem>
      </Menu>
    </div>
  );
}
{/* <StyledButton
                sx={{
                  backgroundColor: "#000", 
                  color: "#fff"
                }}
                variant='contained'
                startIcon={<BrunchDiningIcon />}
              > 
                <Link 
                  style={{
                    textDecoration: "none", 
                    color: "#94ff8f"
                    }} 
                    to="/category/lomos"
                >
                  <Typography> 
                    Lomos 
                  </Typography>
                </Link>
              </StyledButton>

              <StyledButton
                sx={{
                  backgroundColor: "#000", 
                  color: "#fff"
                }}
                variant='contained'
                startIcon={<LocalPizzaIcon />}
                > 
                <Link 
                style={{
                  textDecoration: "none", 
                  color: "#94ff8f"
                }} 
                to="/category/pizzas"
                >
                  <Typography> 
                    Pizzas
                  </Typography>
                </Link>
              </StyledButton>

              <StyledButton
                sx={{
                  backgroundColor: "#000",
                  color: "#fff"
                }}
                variant='contained'
                startIcon={<LunchDiningIcon />}
              > 
                <Link 
                  style={{
                    textDecoration: "none", 
                    color: "#94ff8f"
                    }} 
                  to="/category/hamburguesas">
                  <Typography> 
                    Hamburguesas 
                  </Typography>
                </Link>
              </StyledButton> */}
