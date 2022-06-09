import React, { useContext, useEffect, useState} from "react";
import { cartContext } from '../context/CartContextHOC';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import Form from "./Form";
import FinalScreen from './FinalScreen';

function CheckoutContainer (){
  
  const db = getFirestore()
  const { cart, total } = useContext(cartContext);
  const [id, setId] = useState("")
  const [formData, setFormData] = useState({name: "", surname:"", email: "", phone: 0});
  

  const handleChange = (event) => {
        //console.log(event.target.name, event.target.value)
        setFormData({...formData, [event.target.name] : event.target.value })
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
        <Form  handleSubmit={handleSubmit} handleChange={handleChange} />
        :
        <FinalScreen id={id} />
        
    }
    
    </>

  )
}
export default CheckoutContainer