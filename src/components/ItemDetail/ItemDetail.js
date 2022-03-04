const ItemDetail = ({ producto }) => {
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {producto?.name}
                </h2>
            </header>
            <picture>
                <img src={producto?.img} alt={producto?.name} className="ItemImg"/>
            </picture>
            <section>
                
            <p className="Info">
                    Categoria: {producto?.category}
                </p>
                <p className="Info">
                    Descripción: {producto?.description}
                </p>
                <p className="Info">
                    Precio: {producto?.price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                
            </footer>
        </article>
    )
}

export default ItemDetail
