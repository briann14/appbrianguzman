import { useContext } from 'react';
import  CartContext from '../../context/CartContext';

const Cart = () => {
    const { cart } = useContext(CartContext);
    
    return (
        <>
            {cart.map((prod) => (
                <li key={prod.id}>{prod.cantidad}</li>
                
            ))}
        </>
    );
};

export default Cart;