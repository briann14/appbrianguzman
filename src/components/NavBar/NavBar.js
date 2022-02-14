import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = ({title }) =>{
    
    return(
        <nav className = "NavBar">
            <div>
                <h1>{title}</h1>
                
               
            </div>
        <button className="Option">Celulares</button>
        <button className="Option">Sobre nosotros</button>
        <button className="Option">Contacto</button>
        <CartWidget/>
        
        
        </nav>
    )
}
export default NavBar