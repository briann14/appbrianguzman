import './Item.css'

import {Link} from 'react-router-dom'
const Item = ({producto}) => {
   
    return (
        <div className="cajas">
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {producto.name}
                </h2>
            </header>
            <picture>
                <img src={producto.img} alt={producto.name} className="ItemImg"/>
            </picture>
            <section>
                
            <p className="Info">
                    Precio: {producto.price}
                </p>
                
            </section>           
            <footer className='ItemFooter'>
                <Link to ={`/detail/${producto.id}`}>Ver detalle</Link>
            </footer>
        </article>
        </div>
    )
}

export default Item