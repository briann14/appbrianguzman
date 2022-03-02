
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { productoUno }  from "../../mock/productos"
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState()
    const {productoId} = useParams ()
    useEffect(() => {
        productoUno(productoId).then(item => {
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