import { useContext , useState , useRef} from 'react';
import  CartContext from '../../context/CartContext';
import ItemList from '../ItemList/ItemList';
import { NavLink} from 'react-router-dom';
import { writeBatch, getDoc , doc , addDoc , collection } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/firebase'
import { useNotificationServices } from '../../services/notification/NotificationServices'
const Cart = () => {
    
    const [processingOrder, setProcessingOrder] = useState(false)
        const [contact, setContact] = useState({
            name: '',
            phone: '',
            address: '',
            comment: ''
        })
        const { products, clearCart, removeItem, getTotal , getQuantity } = useContext(CartContext)
        const contactFormRef = useRef()
        const setNotification = useNotificationServices()
         const confirmOrder = () => {
            setProcessingOrder(true)
            const objOrder = {
                    buyer: {
                        name : 'brian',
                        prhone: '13213232',
                        address: 'calle falsa123'
                    },
                    items: products,
                    total: getTotal(),
                    date: new Date()
                }
                const batch = writeBatch(firestoreDb)
                const outOfStock = []
    
                objOrder.items.forEach(prod => {
                    getDoc(doc(firestoreDb, 'products', prod.id)).then(response => {
                        if(response.data().stock >= prod.quantity) {
                            batch.update(doc(firestoreDb, 'products', response.id), {
                                stock: response.data().stock - prod.quantity
                            })
                        } else {
                            outOfStock.push({ id: response.id, ...response.data()})    
                        }
                    })
                })
    
                if(outOfStock.length === 0) {
                    addDoc(collection(firestoreDb, 'orders'), objOrder).then(({id}) => {
                        batch.commit().then(() => {
                            
                            setNotification('success', `La orden se genero exitosamente, su numero de orden es: ${id}`)
                        })
                    }).catch(error => {
                        setNotification('error', error)
                    }).finally(() => {
                        setProcessingOrder(false)
                    })
                } else {
                    outOfStock.forEach(prod => {
                        setNotification('error', `El producto ${prod.name} no tiene stock disponible`)
                        removeItem(prod.id)
                    })          
                }
          
        }
    if (processingOrder){
        return <h2>Se esta procesando la orden</h2>
    }
    const handleRemoveItem = (id, name) => {
        removeItem(id)
    }
     return (
        <div className="container">
            {products.length !== 0 ? (
                <div>
                  <ItemList products={products} />
                    {
                products.map(prod => {
                    return (
                        <div key={prod.id} style={{ display: 'flex'}}>
                            <h3>{prod.name} -</h3>
                            <h3>Cantidad {prod.quantity}</h3>
                            <button onClick={() => handleRemoveItem(prod.id, prod.name)}>X</button>
                        </div>
                    )
            })}
                    <ul className="priceTotal">
                        <li>Total:</li>
                        <li>{getQuantity()}</li>
                        <li>${getTotal()}</li>
                        
                    </ul>
                    <button onClick={() => confirmOrder()} className="Button">Confirmar Compra</button>
                    <button className="buttonCart" onClick={clearCart}>
                        Borrar todos los items
                    </button>
                    <NavLink to="/"><button className="buttonCart">Seguir comprando</button></NavLink>

                </div>
                 
            ) : (
                <div className="listNotCart">
                    <NavLink to="/"><button className="buttonCart">Volver a la tienda</button></NavLink>
                    <h2>Tu carrito está vacío</h2>
                    <h3>¿No sabés qué comprar? ¡Miles de productos te esperan!</h3>
                </div>
            )}
        </div>
    );
};



export default Cart;
