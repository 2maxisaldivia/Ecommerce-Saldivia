import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail';
import { Box } from '@mui/system';
import { productsInfo } from '../db/db';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
    const { id } = useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {
        console.log("id", id)
        productsInfo()
        .then(
            items => {
                console.log("items", items)
                items.find((item)=> {
                    if(item.id == id){
                        console.log("lo encontre", item)
                        setProduct(item)
                        
                    }
                })
            }
        ).catch(
            reject => console.log(reject)
        )
    }, [id])

    
    
  return (
    <Box style={{width: "100%", height:"100%"}}>
        <ItemDetail product={product}/>
    </Box>
  )
}

export default ItemDetailContainer