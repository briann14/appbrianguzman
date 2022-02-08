import "./NavBar.css"

const NavBar = () =>{
    return(
        <nav className = "NavBar">
            <div>
                <img  src = {'./img/store.png'} className = "ImgNavBar" alt = 'logo'/>
               
            </div>
        <button className="Option">Celulares</button>
        <button className="Option">Sobre nosotros</button>
        <button className="Option">Contacto</button>
        </nav>
    )
}
export default NavBar