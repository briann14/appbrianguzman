import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebase'
const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true)
        const collectionRef = categoryId ?
        query(collection(db, 'products'), where('category', '==', categoryId)) :
        collection(db, 'products')

    getDocs(collectionRef).then(response => {
        const products = response.docs.map(doc => {
            return { id: doc.id, ...doc.data() }
        })

        setProducts(products)
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
