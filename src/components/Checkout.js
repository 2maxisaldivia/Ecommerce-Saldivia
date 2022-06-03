import { Box, Button, TextField} from "@mui/material";
import React, { useContext, useEffect, useState} from "react";
import { cartContext } from './context/CartContextHOC';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';


function Checkout(){
  
  const db = getFirestore()
  const { cart, total } = useContext(cartContext);
  const [id, setId] = useState("")
  const [formData, setFormData] = useState({name: "", surname:"", email: "", phone: 0});
  
  const handleChange = (event) => {
        //console.log(event.target.name, event.target.value)
        setFormData({
          ...formData,
          [event.target.name] : event.target.value 
        })
      }

      const handleSubmit = (event) => {
        event.preventDefault()
        //console.log({formData, cart, total})
        const order = {
          buyer: formData,
          products: cart,
          total: total
        }
        console.log("order", order)
        const orders = collection(db, "orders")
        addDoc(orders, order).then(({id}) => setId(id))
      }
      useEffect(() => {
        console.log("id",id)
      }, [id])
  
  
  return(
    <>

    { !id ?
      <form sx={{ display: 'flex', flexDirection: "row"}} onSubmit={handleSubmit}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField 
              id="input-with-sx" 
              label="Nombre" 
              variant="standard" 
              type="text"
              name="name"
              onChange={handleChange} 
              />

            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField 
              id="input-with-sx" 
              label="Apellido" 
              variant="standard" 
              type="text" 
              name="surname"
              onChange={handleChange} 
            />

            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField 
              id="input-with-sx" 
              label="Email" 
              variant="standard" 
              type="email"
              name="email"
              onChange={handleChange} 
            />

            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField 
              id="input-with-sx" 
              label="Celular" 
              variant="standard" 
              type="number" 
              name="phone"
              onChange={handleChange}
            />
      

            <Button 
              variant="contained" 
              color="success"
              type="submit" 
              onSubmit={handleSubmit}>
              Finalizar compra
            </Button>
        </form>
        :
        <Box>
          <h1> Su compra {id} fue generada con exito </h1>
          <Button variant="contained" color="success"><Link to={"/"}>Volver a comprar</Link></Button>
        </Box>
        
    }
    
    </>

  )
}
export default Checkout