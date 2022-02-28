import { useEffect, useState } from 'react';

import { productos } from '../../mock/productos';

import { traerProductos} from "../../mock/productos"
import ItemList from '../ItemList/ItemList';


const ItemListContainer = ({greeting = 'CARRITO'  })=> {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true);
    
    useEffect(() => {
        traerProductos
            .then((res) => {
                setProductos(res);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setCargando(false);
            });
    }, []);

    return (
        <div className="ItemListContainer">
    
            <h1>{greeting}</h1>
            <ItemList productos={productos}/>
        </div>
    )  
}
export default ItemListContainer