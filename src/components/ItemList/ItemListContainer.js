// @ts-check
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import allProducts from './../db/db';
import ItemList from './ItemList';

function ItemListContainer() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const { categoryId } = useParams()

 const fetchProducts = () => {
   setLoading(true);
   setError(false);
   setProducts([]);
   // console.log("categoryId", categoryId)

   const productsPromise = new Promise((res, rej) =>{
     setTimeout(() => {
       // Lista filtrada por categoria
        if(categoryId){
          console.log("categoryId", categoryId)
          const listaFiltrada = allProducts.filter(item => item.category == categoryId);
          console.log(listaFiltrada)
          res(listaFiltrada)
        }
        // Lista con todos los productos 
        else {
          res(allProducts)
        }
     }, 1000);
   })
   
   productsPromise
   .then(
    res => setProducts(res)
   ).catch(
     () => setError(true)
   ).finally(
     () => setLoading(false)
   )
 }

 useEffect(() => {
   fetchProducts()
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
  