import React, { useContext, useEffect, useState} from "react";
import { cartContext } from '../context/CartContextHOC';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import CheckoutSuccessfullPurchase from './CheckoutSuccessfullPurchase';
import { TextField, Button, Alert, Typography } from '@mui/material';
import styled from "@emotion/styled";
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
function CheckoutForm (){
  
  const navigate = useNavigate();
  const db = getFirestore()
  const { cart, total, clearCart } = useContext(cartContext);
  const [id, setId] = useState("")
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
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = formData =>{
    //console.log(formData);
    if(cart.length > 0){
      const order = {
        buyer: formData,
        products: cart,
        total: total
      }
      //console.log("order", order)
      const orders = collection(db, "orders")
      addDoc(orders, order).then(({id}) => setId(id))
      clearCart()
    }
  }

  useEffect(() => {
    //console.log("id",id)
  }, [id])

  useEffect(() => {
    if(cart.length <= 0){
      navigate('/')
    }
  }, [])
  
  return(
    <>
    {
     id === "" ?
        <>
        <Box>
        <form sx={{ display: 'flex', width: "80%", height: "100%"}} onSubmit={handleSubmit(onSubmit)}>
            <TextField 
              label="Nombre" 
              variant="standard" 
              type="text" 
              {
                ...register("name",
                {required : {
                  value: true,
                  message: "El nombre es obligatorio"
                }})
              } 
              />
              {
              errors.name?.type === "required" && 
              <Alert variant='outlined' severity="error" sx={{width: "60%", ml: "15%", mt: 1}}>
                {errors.name.message}
              </Alert>
              }

            <br/>

            <TextField
              label="Apellido" 
              variant="standard" 
              type="text"
              {
                ...register("surname",
                {required : {
                  value: true,
                  message: "El apellido es obligatorio"
                }})
              } 
            />
            {
            errors.surname?.type === "required" && 
              <Alert variant='outlined' severity="error" sx={{width: "60%", ml: "15%", mt: 1}}>
                {errors.surname.message}
              </Alert>
            }
            <br/>
            
            <TextField 
              label="Correo electrónico" 
              variant="standard" 
              type="email"
              {
                ...register("email",
                  {required : {
                    value: true,
                    message: "El email es obligatorio"
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "El formato de correo no es válido"
                  }
                })
              }  
            />
            {
            errors.email && 
              <Alert variant='outlined' severity="error" sx={{width: "60%", ml: "15%", mt: 1}}>
                {errors.email.message}
              </Alert>
            }
            <br/>
            
            <TextField 
              label="Celular" 
              variant="standard" 
              type="number" 
              {
                ...register("phone",
                {required : {
                  value: true,
                  message: "El celular es obligatorio"
                }, minLength: {
                  value: 10, 
                  message: "Debe contener al menos 10 caracteres"
                }})
              } 
              />
              {
              errors.phone?.type === "required" && 
                <Alert variant='outlined' severity="error" sx={{width: "60%", ml: "15%", mt: 1}}>
                  {errors.phone.message}
                </Alert>
              }
              {/* {
              errors.phone?.type === "minLength" && 
                <Alert variant='outlined' severity="error" sx={{width: "60%", ml: "15%", mt: 1}}>
                  <Typography>Debe contener mas de 10 caracteres</Typography> 
                </Alert>
              } */}
              {
              errors.phone?.type === "minLength" && 
                <Alert variant='outlined' severity="error" sx={{width: "60%", ml: "15%", mt: 1}}>
                  <Typography>Debe contener mas de 10 caracteres</Typography> 
                </Alert>
              }
        
            <br/>

            <StyledButton 
              sx={{mt: 3}}
              variant="contained" 
              color="success"
              type="submit" 
              onSubmit={handleSubmit}>
                Comprar
            </StyledButton>
        </form>
      </Box>
        </>
        :
        <CheckoutSuccessfullPurchase id={id} />
      }
    
    </>

  )
}
export default CheckoutForm