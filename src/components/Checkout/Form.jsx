import React from 'react'
import { TextField, Button } from '@mui/material';
import styled from "@emotion/styled";

function Form({handleSubmit, handleChange}) {
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
        <form sx={{ display: 'flex', width: "100%", height: "100%"}} onSubmit={handleSubmit}>
            <TextField
              id="input-with-sx" 
              label="Nombre" 
              variant="standard" 
              type="text"
              name="name"
              onChange={handleChange} 
              sx={{left: "23%"}}
              />

              <br/>

            <TextField 
              id="input-with-sx" 
              label="Apellido" 
              variant="standard" 
              type="text" 
              name="surname"
              onChange={handleChange}
              sx={{left: "23%"}}
              />

              <br/>
            
            <TextField 
              id="input-with-sx" 
              label="Email" 
              variant="standard" 
              type="email"
              name="email"
              onChange={handleChange} 
              sx={{left: "23%"}}
              />
            
            <br/>
            
            <TextField 
              id="input-with-sx" 
              label="Celular" 
              variant="standard" 
              type="number" 
              name="phone"
              onChange={handleChange}
              sx={{left: "23%"}}
              />
        
            <br/>

            <StyledButton 
              sx={{mt: 3, left: "35%"}}
              variant="contained" 
              color="success"
              type="submit" 
              onSubmit={handleSubmit}>
                Comprar
            </StyledButton>
        </form>
      </div>
  )
}

export default Form