import './ItemList.css'
import Item from "../Item/Item"
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemList = ({ productos }) => {

    return (
        <div>
        {productos.map((producto) => (
            <Item {...producto} key={producto.id} />
        ))}
        </div>
    )
}

export default ItemList