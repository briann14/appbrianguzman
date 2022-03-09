
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { miProducto} from '../../mock/productos';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        miProducto(itemId)
            .then((res) => {
                setProduct(res);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
        return () => {
            setProduct([]);
            setLoading(true);
        };
    }, [itemId]);

    return (
        <div>{loading ? <h1>Cargando</h1> : <ItemDetail product={product} />}</div>
    );
};

export default ItemDetailContainer;
