import { Box } from '@mui/system';
import React, {useEffect, useState} from 'react'
import ItemList from './ItemList';


function ItemListContainer() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    setLoading(true)
    setError("")
    const productPromise = new Promise((res, rej) =>{
      setTimeout(() => {
        res([
          {
            id: 1,
            title: "Lomo Completo",
            description: "Lomo, tomate, lechuga, huevo, jamon, queso, bacon",
            price: "900",
            pictureUrl: "https://www.clarin.com/img/2021/07/26/el-lomito-uno-de-los___u-aUfp64d_1256x620__1.jpg"
          },
          {
            id: 2, 
            title: "Lomo Pollo",
            description: "Pollo, tomate, lechuga, huevo, jamon, queso",
            price: 800,
            pictureUrl: "https://delivery.devillamercedes.ar/contenidos/361_1.jpg",
          },
          {
            id: 3,
            title: "Lomo Veggie",
            description: "Tomate, lechuga, huevo, pimientos, cebolla", 
            price: "1100",
            pictureUrl: "https://gofriz.com.ar/pub/media/catalog/product/cache/0aa4a66424b53678397f3c8970690f3d/l/o/lomo_veggie_de_vegetales_c_1.jpg"
          }
        ])
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
  