import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts} from '../../mock/productos';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        
        setLoading(true)
         getProducts(categoryId).then(item => {
            setProducts(item)
        }).catch(err  => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProducts()
        })          
    }, [categoryId]) 

    return (
        <div>
        {loading ? ( <h1>Cargando</h1>) : ( <ItemList products={products} /> )}
        </div>
    );
};

export default ItemListContainer;
