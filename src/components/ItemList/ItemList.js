import './ItemList.css'
import Item from "../Item/Item"
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemList = ({ products }) => {

    return (
        <div>
        {products.map((product) => (
            <Item {...product} key={product.id} product ={product} />
        ))}
        </div>
    )
}

export default ItemList