import React, { useState } from 'react'
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';

function ItemCount({stock, initial}) {
    const ButtonGroupStyles = {
        marginLeft: "20%"
    }
    const buttonStyles = {
        backgroundColor: "#000",
        color: "#94ff8f",
        borderColor: "#000"
    }
    const divStyles = {
        fontSize: "18pt",
        color: "#fff"
    }

    const [count, setCount] = useState(initial);

    return (
        <div>
        <ButtonGroup disableElevation variant="contained" style={ButtonGroupStyles}>
            <IconButton onClick={() => setCount(count > initial ? count - 1 : count)} style={buttonStyles}> <RemoveIcon /> </IconButton>
            <div style={divStyles}>{count}</div>
            <IconButton onClick={()=> setCount(count < stock ? count + 1 : count)} style={buttonStyles}> <AddIcon/> </IconButton>
        </ButtonGroup >
        </div>
    )
}

export default ItemCount;