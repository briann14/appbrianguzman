import { Link } from "react-router-dom";
import { products } from '../../mock/productos';
import  { useContext } from 'react';
import CartContext  from '../../context/CartContext';
import './CartWidget.css'


const CartWidget = () => {
    const { cart } = useContext(CartContext);
    return(
        <div className="carrito">
   <img  src = {'../img/carrito.png'}  className= "imagenCart" alt = 'logo'/>
   {cart.map((prod) => (
      <span key={prod.id}className="contador">{prod.cantidad}</span>
    ))}
  </div>
    )}
export default CartWidget