import React, { useState } from 'react'
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';

function ItemCount({stock, initial}) {
    const ButtonGroupStyles = {
        marginLeft: "2%",
        width: "8rem"
    }
    const buttonStyles = {
        backgroundColor: "#272727",
        color: "#94ff8f",
        borderColor: "#000"
    }
    const divStyles = {
        fontSize: "18pt",
        color: "#fff",
        width: "100%",
        textAlign: "center",
    }

    const [count, setCount] = useState(initial);

    return (
        <div style={{display:"flex", justifyContent: "right", paddingTop: "30%", paddingBottom: "0%", paddingRight:"4%"}}>
        <ButtonGroup disableElevation variant="contained" style={ButtonGroupStyles}>
            <IconButton onClick={() => setCount(count > initial ? count - 1 : count)} style={buttonStyles}> <RemoveIcon /> </IconButton>
            <div style={divStyles}>{count}</div>
            <IconButton onClick={()=> setCount(count < stock ? count + 1 : count)} style={buttonStyles}> <AddIcon/> </IconButton>
        </ButtonGroup >
        </div>
    )
}

export default ItemCount;