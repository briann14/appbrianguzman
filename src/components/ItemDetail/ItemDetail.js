import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = ({ product }) => {
    const [cantidad, setCantidad] = useState(0);

    const onAdd = (cantidad) => {
        setCantidad(cantidad);
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
                </div>
                )}
            </footer>
        </article>
    )
}

export default ItemDetail
