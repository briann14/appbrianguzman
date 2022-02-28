
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { productoUno }  from "../../mock/productos"


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState()

    useEffect(() => {
        productoUno().then(item => {
            setProducto(item)
        }).catch(err  => {
            console.log(err)
        })

        return (() => {
            setProducto()
        })

    }, [])


    return (
        <div >
            <ItemDetail  producto={producto}/>
        </div>
    )    
}
export default ItemDetailContainer