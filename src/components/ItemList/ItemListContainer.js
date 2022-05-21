import { Box } from '@mui/system';
import React, {useEffect, useState} from 'react'
import ItemList from './ItemList';
import { productsInfo } from './../db/db';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const { id } = useParams()
  useEffect(() => {
    setLoading(true)
    setError("")
    console.log("id", id)
    
    productsInfo()
    .then(
      items => {
        console.log("products", items)
        items.filter((item)=>{
          if(item.category == id){
            console.log("item", item)
            console.log("lo encontre")
            setProducts([item])
          } 
          // setProducts(filtrados)
        })
        
        
      })
    .catch((error) => {
      console.log(error)
      setError(error)
    })
    .finally(()=>{
      setLoading(false)
    });

  }, [id])
  
  return (
    <>
    <Box sx={{display:"flex", flexDirection: "row"}}>
      <ItemList products={products} loading={loading} error= {error}/>
    </Box>
    </>
  )
}
export default ItemListContainer;
  