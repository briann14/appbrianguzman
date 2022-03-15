import { useContext } from 'react';
import  CartContext from '../../context/CartContext';
import ItemList from '../ItemList/ItemList';
import { Link } from 'react-router-dom';
const Cart = () => {
    const { products, clearCart, removeItem, getTotal , getQuantity } = useContext(CartContext)
    const handleRemoveItem = (id, name) => {
        removeItem(id)
    }
     return (
        <div className="container">
            {products.length !== 0 ? (
                <div>
                  <ItemList products={products} />
                    {
                products.map(prod => {
                    return (
                        <div key={prod.id} style={{ display: 'flex'}}>
                            <h3>{prod.name} -</h3>
                            <h3>Cantidad {prod.quantity}</h3>
                            <button onClick={() => handleRemoveItem(prod.id, prod.name)}>X</button>
                        </div>
                    )
            })}
                    <ul className="priceTotal">
                        <li>Total:</li>
                        <li>{getQuantity()}</li>
                        <li>${getTotal()}</li>
                        
                    </ul>
                    <button className="buttonCartEnd" >Terminar Compra</button>
                    <button className="buttonCart" onClick={clearCart}>
                        Borrar todos los items
                    </button>
                    <Link to="/"><button className="buttonCart">Seguir comprando</button></Link>

                </div>
                 
            ) : (
                <div className="listNotCart">
                    <Link to="/"><button className="buttonCart">Volver a la tienda</button></Link>
                    <h2>Tu carrito está vacío</h2>
                    <h3>¿No sabés qué comprar? ¡Miles de productos te esperan!</h3>
                </div>
            )}
        </div>
    );
};



export default Cart;