// @ts-check
import { Box } from '@mui/system';
import React from 'react';
import Loading from '../Loading/Loading';
import Item from './Item';

function ItemList({products, loading, error}) {
  return (
    <>
    {/* { loading ? 
    <Loading />
    : products != undefined ? 
    products && products.map((product) => <Item key={product.id} product={product}/>)
    : <h4>Error al cargar los productos</h4>} */}
    
    {loading && <Loading />}
    <Box display="flex" flexWrap="wrap" sx={{width: "100%", justifyContent: "center"}}>
      {products && products.map((product) => <Item key={product.id} product={product}/>)}
    </Box>

    {error && <h4>Error al cargar el catalogo de productos</h4>}
    </>
  )
}

export default ItemList;