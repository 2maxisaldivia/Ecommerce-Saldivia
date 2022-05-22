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
        console.log("items", items)  
        setProducts(items)
        items.map((item)=>{
          if(item.category == id){
            setProducts([item])
            console.log("item", item)
            console.log("lo encontre")
            
          } 
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
      {products.title}
      <ItemList products={products} loading={loading} error= {error}/>
    </Box>
    </>
  )
}
export default ItemListContainer;
  