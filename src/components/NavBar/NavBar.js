import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import { NavLink , Link } from 'react-router-dom';
import { useEffect, useState } from 'react'

const Navbar = () => {
  return (
    <nav className="NavBar" >
         <NavLink to={'/'}>
           <img  src = {'../img/movil.png'} className ="ImgNav" alt = 'logo'/>
          </NavLink>
          <ul className="cajasBotones">
                <Link to="/category/celulares" className="Botones">CELULARES</Link>
                <Link to="/category/tablet" className="Botones">TABLET</Link>
                <Link to="/category/contacto" className="Botones">CONTACTO</Link>
          </ul>
          <div>
          <NavLink to="/cart">
            <CartWidget/>
          </NavLink>  
         </div>
      </nav>
  );
};

export default Navbar;
