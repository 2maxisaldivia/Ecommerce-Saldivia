import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
    const [product, setProduct] = useState([])

    useEffect(() => {
        const productDetail = new Promise((res, rej) =>{
            setTimeout(() => {
                res({
                        id: 1,
                        title: "Lomo Completo",
                        description: "Lomo, tomate, lechuga, huevo, jamon, queso, bacon",
                        price: "900",
                        pictureUrl: "https://www.clarin.com/img/2021/07/26/el-lomito-uno-de-los___u-aUfp64d_1256x620__1.jpg"
                    });  
             
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
    <div>
        <ItemDetail product={product}/>
    </div>
  )
}

export default ItemDetailContainer