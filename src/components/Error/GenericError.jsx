import React from 'react'
import { Container, Box,  Typography } from '@mui/material'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'; 
function GenericError({message}) {
  return (

    <>
        <Container
        maxWidth="xs"
        sx={{
            width: "100%",
            mt: 2,
          }}>
        <Box
        sx={{justifyItems: "center"}}>
            <ErrorOutlineIcon color="error" sx={{fontSize: 60, mt: 2}} />
            <Typography 
                variant="h5" 
                component="div"
                sx={{
                  textAlign: "center",
                  mt: 1,
                  pb: 3,
                  color:"#000"
                }}
                > 
               {message}
            </Typography>
            
        </Box>
    </Container>
    </>
  )
}

export default GenericError