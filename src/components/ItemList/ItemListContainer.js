import { Box } from '@mui/system';
import React, {useEffect, useState} from 'react'
import ItemList from './ItemList';
import { productsInfo } from './../db/db';


function ItemListContainer() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    setLoading(true)
    setError("")
    const productPromise = new Promise((res, rej) =>{
      setTimeout(() => {
        if(productsInfo){
           res(productsInfo)
        }
      }, 2000)
    })
    
    productPromise
    .then(
      result => {
        console.log(result)
        setProducts(result)
      })
    .catch((error) => {
      console.log(error)
      setError(error)
    })
    .finally(()=>{
      setLoading(false)
    });

  }, [])
  
  return (
    <>
    <Box sx={{display:"flex", flexDirection: "row"}}>
      <ItemList products={products} loading={loading} error= {error}/>
    </Box>
    
    </>
  )
}
export default ItemListContainer;
  