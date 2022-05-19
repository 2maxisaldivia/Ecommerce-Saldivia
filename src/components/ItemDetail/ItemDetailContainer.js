import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
    const [product, setProduct] = useState([])

    useEffect(() => {
        const productDetail = new Promise((res, rej) =>{
            setTimeout(() => {
                res(
                    {
                        id: 9,
                        title: "Baconized",
                        description: "Mayonesa, doble queso cheddar, trozos de bacon, cebolla caramelizada, carne y papas.", 
                        price: "700",
                        pictureUrl: "https://malevamag.com/wp-content/uploads/2019/12/destacada-2.jpg",
                        category: 3
                    }
                    );  
             
                rej("Promesa incumplida");

            }, 2000);
            
        })
        productDetail
        .then(
            result => {
                console.log("result", result)
                setProduct(result)
            }
        ).catch(
            reject => console.log(reject)
        )
    }, [])

    
    
  return (
    <div className='maximiliano' style={{width: "100%", height:"100%"}}>
        <ItemDetail product={product}/>
    </div>
  )
}

export default ItemDetailContainer