// @ts-check
import React from "react";
import { Box } from "@mui/system";
function Loading(){
    const divPosition = {
        position: "absolute",
        width: "100%",
        height: "100%"
    }
    const loadingContainer = {
        position: "relative",
        left: "45%",
        top: "35%",
        width: "200px",
        height: "200px",
        border: "9px solid #000",
        borderRadius: "50%",
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "transparent",
        animation: "2s rotate infinite"
    }

    return(
        <Box sx={{
            position: "absolute", 
            width: "100%", 
            height: "100%"
            }}>
            <Box 
            sx={{position: "relative",
            left: "45%",
            top: "35%",
            width: "200px",
            height: "200px",
            border: "9px solid #94ff8f",
            borderRadius: "50%",
            borderLeftColor: "transparent",
            borderRightColor: "transparent",
            borderBottomColor: "transparent",
            animation: "2s rotate infinite"}}>
            </Box>
                <style>{`
                    @keyframes rotate {
                        0% {
                        transform: rotate(0deg);
                        }
                        100% {
                        transform: rotate(359deg);
                        }
                    }`}
                </style>
        </Box>
    )
}
export default Loading;