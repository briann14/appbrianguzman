
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../mock/productos';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()
    

    useEffect(() => {
        getProduct(productId).then(item => {
            setProduct(item)          
        }).catch(err  => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProduct()
        })

    }, [productId])



    return (
        <div className="ItemDetailContainer" >
        { 
            loading ? 
                <h1>Cargando...</h1> :
            product ? 
                <ItemDetail  {...product} /> :
                <h1>El producto no existe</h1> 
        }
    </div>
    );
};

export default ItemDetailContainer;
