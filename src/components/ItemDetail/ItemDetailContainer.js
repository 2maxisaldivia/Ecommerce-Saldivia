
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import allProducts from './../db/db';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchProduct = () => {
        setLoading(true);
        setError(false);
        setProduct([])
        //console.log("Id", id)

        const productPromise = new Promise((res, rej) =>{
            setTimeout(() =>{
                //console.log("id", id)
                const itemDetail = allProducts.find((item) => item.id == id);
                res(itemDetail)
            }, 1000)
        })
        productPromise
        .then(
            res => setProduct(res)
        ).catch(
            () => setError(true)
        ).finally(
            () => setLoading(false)
        )
    }

        useEffect(() => {
        fetchProduct()
        }, [id])
    
        return (

            <Box sx={{width: "100%", height:"100%"}}>
                <ItemDetail product={product} loading={loading} error={error} />
            </Box>
        )
}
export default ItemDetailContainer;
