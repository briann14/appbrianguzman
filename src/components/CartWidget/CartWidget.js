
import React, { useContext } from 'react';
import CartContext  from '../../context/CartContext';
import './CartWidget.css'
import { NavLink } from "react-router-dom";


const CartWidget = ({margin = 2 ,  width = 40 }) => {

    const { getQuantity } = useContext(CartContext)

    return(
        
        <NavLink to={'cart'} className = 'link' >
            <div className="carrito">
        <img  src = {'../img/carrito.png'}  style ={{margin ,width}} alt = 'logo'/>
        <span className='contador'>{getQuantity()}</span>
        </div>
        </NavLink>

        
    );
    }
export default CartWidget;


    
   