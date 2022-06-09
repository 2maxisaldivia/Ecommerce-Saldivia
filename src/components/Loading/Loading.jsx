// @ts-check
import { Box } from "@mui/system";
import React from "react";
import CircularProgress from '@mui/material/CircularProgress';

function Loading(){

    return(
        <CircularProgress size={120} thickness={2} color="inherit" sx={{ml: "35%", mt: "70%"}}/>
       
    )
}
export default Loading;