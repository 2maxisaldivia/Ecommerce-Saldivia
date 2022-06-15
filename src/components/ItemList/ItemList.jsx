// @ts-check
import { Box } from '@mui/system';
import React from 'react';
import Loading from '../Loading/Loading';
import Item from './Item';
import GenericError from './../Error/GenericError';
import { Grid } from '@mui/material';

function ItemList({products, loading, error}) {
  return (
    <>
    {/* { loading ? 
    <Loading />
    : products != undefined ? 
    products && products.map((product) => <Item key={product.id} product={product}/>)
    : <h4>Error al cargar los productos</h4>} */}
    
    {loading && <Loading />}
    <Grid container className="grid-container" spacing={2} justifyContent="center">
      {products && products.map((product) => <Item key={product.id} product={product}/>)}
    </Grid>

    {error && <GenericError  message={"Error al cargar el catalogo de productos"}/>}
    </>
  )
}

export default ItemList;