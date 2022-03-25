import './Item.css'
import {NavLink} from 'react-router-dom'
const Item = ({product}) => {
   
    return (
        <div className="cajas">
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {product.name}
                </h2>
            </header>
            <picture>
                <img src={product.img} alt={product.name} className="ItemImg"/>
            </picture>
            <section>
                
            <p className="Info">
                    Precio: {product.price}
                </p>
                
            </section>           
            <footer className='ItemFooter'>
                <NavLink to ={`/detail/${product.id}`}>Ver detalle</NavLink>
            </footer>
        </article>
        </div>
    )
}

export default Item