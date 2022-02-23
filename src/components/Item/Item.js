import './Item.css'

const Item = ({img, name, price}) => {
   
    return (
        <div className="cajas">
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                
            <p className="Info">
                    Precio: {price}
                </p>
                
            </section>           
            <footer className='ItemFooter'>
            </footer>
        </article>
        </div>
    )
}

export default Item