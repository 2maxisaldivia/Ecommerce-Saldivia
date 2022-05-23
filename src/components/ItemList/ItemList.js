// @ts-check
import React from 'react'
import Item from './Item';
import Loading from './../Loading/Loading';
import { Box } from '@mui/system';

function ItemList({products, loading, error}) {
  return (
    <>
    {loading && <Loading />}
    <Box sx={{display: "grid", gridTemplateColumns: "repeat(5, 1fr)"}}>
      {products && products.map((product) => <Item key={product.id} product={product}/>)}
    </Box>

    {error && "Error al cargar el catalogo de productos"}
    </>
  )
}

export default ItemList;