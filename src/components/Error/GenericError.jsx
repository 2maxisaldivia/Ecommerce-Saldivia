import React from 'react'
import { Box, Typography } from '@mui/material'
function GenericError({message}) {
  return (

    <>
        <Box 
        sx={{
            width: "100%"
          }}>
        <Box
        sx={{justifyItems: "center"}}>

            <Typography 
                variant="h5" 
                component="div"
                sx={{
                  textAlign: "center",
                  mt: 3
                }}
                > 
               {message}
            </Typography>
            
        </Box>
    </Box>
    </>
  )
}

export default GenericError