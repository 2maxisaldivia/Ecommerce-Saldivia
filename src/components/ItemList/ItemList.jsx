// @ts-check
import { Box } from '@mui/system';
import React from 'react';
import Loading from '../Loading/Loading';
import Item from './Item';
import GenericError from './../Error/GenericError';

function ItemList({products, loading, error}) {
  return (
    <>
    {/* { loading ? 
    <Loading />
    : products != undefined ? 
    products && products.map((product) => <Item key={product.id} product={product}/>)
    : <h4>Error al cargar los productos</h4>} */}
    
    {loading && <Loading />}
    <Box display="flex" flexWrap="wrap" sx={{width: "100%", justifyContent: "center", mt: 8}}>
      {products && products.map((product) => <Item key={product.id} product={product}/>)}
    </Box>

    {error && <GenericError  message={"Error al cargar el catalogo de productos"}/>}
    </>
  )
}

export default ItemList;