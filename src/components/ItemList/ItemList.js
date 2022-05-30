// @ts-check
import { Box } from '@mui/system';
import React from 'react';
import Loading from './../Loading/Loading';
import Item from './Item';

function ItemList({products, loading, error}) {
  return (
    <>
    {loading && <Loading />}
    <Box sx={{display: "grid", gridTemplateColumns: "repeat(5, 1fr)"}}>
      {products && products.map((product) => <Item key={product.id} product={product}/>)}
    </Box>

    {error && <h4>Error al cargar el catalogo de productos</h4>}
    </>
  )
}

export default ItemList;