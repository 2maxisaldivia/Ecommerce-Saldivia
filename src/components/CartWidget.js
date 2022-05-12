import React from 'react'
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StyledBadge from '@mui/material/Badge'

function CartWidget({numberCart}) {
    const colorStyles = {
        color : "#fff"
    }

    return (
        <Button>
            <StyledBadge badgeContent={numberCart} sx={{"& .MuiBadge-badge": {color: "#000", backgroundColor: "#94ff8f"}
  }}>
                <ShoppingCartIcon style={colorStyles} />
            </StyledBadge>
        </Button>
    )
}

export default CartWidget