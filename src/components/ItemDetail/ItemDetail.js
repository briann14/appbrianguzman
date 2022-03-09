import { useState , useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
import CartContext from '../../context/CartContext'
const ItemDetail = ({ product }) => {
        const [cantidad, setCantidad] = useState(0);
        const { Agregando , clearItems, values} = useContext(CartContext);
        
        const onAdd = (cantidad) => {
            setCantidad(cantidad);
            Agregando(product, cantidad);
        };
    
    
    return (
        <article className="CardItem">
        <header className="Header">
            <h2 className="ItemHeader">
                {product?.name}
            </h2>
        </header>
        <picture>
            <img src={product?.img} alt={product?.name} className="ItemImg"/>
        </picture>
        <section>
            
        <p className="Info">
                Categoria: {product?.category}
            </p>
            <p className="Info">
                Descripción: {product?.description}
            </p>
            <p className="Info">
                Precio: {product?.price}
            </p>
        </section>           
        <footer className='ItemFooter'>
        {cantidad === 0 ? ( <ItemCount stock={product.stock} onAdd={onAdd} />) : (
            <div>
            <Link to="/cart" className='boton'>FINALIZAR COMPRA</Link>
            <button className="botonborrar" onClick={clearItems}> Borrar todos los items </button>
            </div>
            
            )}
        </footer>
    </article>
    )
}
export default ItemDetail
