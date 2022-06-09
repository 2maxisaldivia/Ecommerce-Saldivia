// @ts-check
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StyledBadge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import React, {useContext} from 'react';
import { cartContext } from '../context/CartContextHOC';
import { IconButton } from '@mui/material';
function CartWidget({numberCart}) {

    const {productsInCart} = useContext(cartContext)
    
    return (
        <>
        <StyledBadge 
            badgeContent={productsInCart} 
            sx={{
                "& .MuiBadge-badge": 
                    {color: "#000", 
                    backgroundColor: "#94ff8f"
                    }}}>
            <ShoppingCartIcon sx={{color : "#fff"}} />
        </StyledBadge>
        </>
    )
}

export default CartWidget;