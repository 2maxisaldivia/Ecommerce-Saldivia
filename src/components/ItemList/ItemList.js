import React from 'react'
import Item from './Item';
import Loading from './../Loading/Loading';

function ItemList({products, loading, error}) {
  return (
    <>
    {loading && <Loading />}

    {products && products.map((product) => <Item key={product.id} product={product}/>)}

    {error && "Error al cargar el catalogo de productos"}
    </>
  )
}

export default ItemList