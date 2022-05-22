import { Box } from '@mui/system';
import React, {useEffect, useState} from 'react'
import ItemList from './ItemList';
import { productsInfo } from './../db/db';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    setError("")
    console.log("id", categoryId)
    
    productsInfo()
    .then(
      items => {
        
        // Contiene todos los productos para que se renderizen en "/"
        console.log("items", items) 
        setProducts(items)
        
        // Lista de los elementos filtrados por categoria especifica 
        const listaFiltrada = []
        items.filter((item)=>{
          if(item.category == categoryId){
            listaFiltrada.push(item)
            console.log("lo encontre")
            console.log("lista de prueba", item)
            setProducts(listaFiltrada)
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

  }, [categoryId])
  
  return (
    <>
    <Box sx={{display:"flex", flexDirection: "row"}}>

      <ItemList products={products} loading={loading} error= {error}/>
    </Box>
    </>
  )
}
export default ItemListContainer;
  