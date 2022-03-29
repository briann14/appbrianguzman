import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import { NavLink  } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="NavBar" >
         <NavLink to={'/'}>
           <img  src = {'../img/movil.png'} className ="ImgNav" alt = 'logo'/>
          </NavLink>
          <ul className="cajasBotones">
                <NavLink to="/category/celulares" className="Botones">CELULARES</NavLink>
                <NavLink to="/category/tablet" className="Botones">TABLET</NavLink>
                <NavLink to="/category/accesorios" className="Botones">ACCESORIOS</NavLink>
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
