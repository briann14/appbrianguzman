import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCategorias } from '../../mock/productos'


const NavBar = () => { 
    const [categorias, setCategorias] = useState([])
    
    useEffect(() => {
      getCategorias().then(categorias => {
        setCategorias(categorias)
      })
    }, [])
  
    return (
        <nav className="NavBar" >
          <div className="">
          <NavLink to={'/'}
>
            <img  src = {'../img/movil.png'} className ="ImgNav" alt = 'logo'/>
          </NavLink>
          </div>
          <div className="cajasBotones">
            {categorias.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`} className='Botones'>{cat.description}</NavLink>)}
          </div>
          <CartWidget />
        </nav>
    )
  }
  
  export default NavBar
  