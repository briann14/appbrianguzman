import {  useState } from 'react'

import ItemCount from "../ItemCount/ItemCount"





const ItemListContainer = ({greeting = 'CARRITO'  })=> {
    const [productos, setProductos] = useState([])

    
    
    
    const handleOnAdd = (cantidad) => {
        console.log(`Se agregaron ${cantidad} productos`)
    }

    console.log(productos)

    return (
        <div className="ItemListContainer">
            <h1>{greeting}</h1>
            <ItemCount stock={10} initial={2} onAdd={handleOnAdd}/>
            <ul>
                {productos.map(producto => {
                    return <li key={producto.id}>{producto.name}</li>
                })}
                
            </ul>
        </div>
    )    
    
}

export default ItemListContainer