import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { misProductos} from '../../mock/productos';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        misProductos(categoryId)
            .then((res) => {
                setProducts(res);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });

        return () => {
            setProducts([]);
            setLoading(true);
        };
    }, [categoryId]);

    return (
        <div>
        {loading ? ( <h1>Cargando</h1>) : ( <ItemList products={products} /> )}
        </div>
    );
};

export default ItemListContainer;
