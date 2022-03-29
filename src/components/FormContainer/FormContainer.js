
import { writeBatch, getDocs, collection, addDoc, Timestamp, where, query, documentId } from 'firebase/firestore'
import "./FormContainer.css"
import React, { useContext, useState} from 'react';
import { db } from '../../services/firebase/firebase'
import CartContext from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { useNotificationServices } from '../../services/notification/NotificationServices'

const FormContainer= () => {
    const { products, clearCart, getTotal, removeItem } = useContext(CartContext)
    
    const setNotification = useNotificationServices()
    const [contact, setContact] = useState({ name: '', lastName: '', phone: '', email: '' });
    const [errorName, setErrorName] = useState(false);
    const [errorLastName, setErrorLastName] = useState(false);
    const [errorPhone, setErrorPhone] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const navigate = useNavigate();
    
    const fillOutForm = (e) => {
        const { name, value } = e.target;
        setContact({
            ...contact,
            [name]: value,
        });
    };

    const handleOnKeyDownPhone = (e) => {
        if (e.keyCode === 8 || e.keyCode === 9 || e.keyCode === 13 || (e.keyCode >= 48 && e.keyCode <= 57)) {
        } else {
            e.preventDefault();
        }
    };

    const validateForm = (e) => {
        e.preventDefault();

        if (contact.name) {
        setErrorName(false);
        } else {
            setErrorName(true);
        }
        if (contact.lastName) {
        setErrorLastName(false);
        } else {
            setErrorLastName(true);
        }
        if (contact.email) {
            setErrorEmail(false);
        } else {
            setErrorEmail(true);
        }
        if (contact.phone) {
            setErrorPhone(false);
        } else {
            setErrorPhone(true);
        }

        if (contact.name && contact.lastName && contact.email &&contact.phone) {
            checkout();
        }
    };

    const checkout = () => {
        const purchase = {
            buyer: { nombre: contact.name, apellido: contact.lastName, phone: contact.phone, email: contact.email },
            items: products,
            total: getTotal(),
            date: Timestamp.fromDate(new Date())
        }
        
    const batch = writeBatch(db)
    const outOfStock = []
    
    const ids = purchase.items.map(i => i.id)

    getDocs(query(collection(db, 'products'),where(documentId(), 'in', ids)))
        .then(response => {
            response.docs.forEach((docSnapshot) => {
                if(docSnapshot.data().stock >= purchase.items.find(prod => prod.id === docSnapshot.id).quantity) {
                    batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - purchase.items.find(prod => prod.id === docSnapshot.id).quantity})
                } else {
                    outOfStock.push({id: docSnapshot.id, ...docSnapshot.data()})
                }
            })
        }).then(() => {
            if(outOfStock.length === 0) {
                addDoc(collection(db, 'orders'), purchase).then(({id}) => { 
                    batch.commit()
                    clearCart()
                    setNotification('success', `La orden se genero exitosamente, su numero de orden es: ${id}`)
                })
            } else {
                outOfStock.forEach(prod => {
                    setNotification('error', `El producto ${prod.name} no tiene stock disponible`)
                    removeItem(prod.id)
                })    
            }               
        }).catch((error) => {
            setNotification('error', error)
        }).finally(() => {
           
            setTimeout(() => {
                navigate('/');
                clearCart();
            }, 1500);
            
        })
    
    }

    return (
        <div className="checkoutContainer">
            { (
                <div className='divForm'>
                    <form method="post" onSubmit={validateForm}>
                            <h1>Ingresar Datos</h1>
                            <div className="containerText">
                                <input className = "inputForm" type="text" placeholder="nombre" name="name" id="name" onChange={fillOutForm} />
                                {errorName && <p className="error">El nombre es requerido</p>}
                            </div>
                            <div className="containerText">
                                <input className = "inputForm" type="text" placeholder="apellido" name="lastName" id="lastName" onChange={fillOutForm} />
                                {errorLastName && <p className="error">El apellido es requerido</p>}
                            </div>
                            <div className="containerText">
                                <input className = "inputForm" type="email" placeholder="email" name="email" id="email" onChange={fillOutForm} />
                                {errorEmail && <p className="error">El email es requerido</p>}
                            </div>
                            <div className="containerText">
                                <input
                                className = "inputForm"
                                    type="tel"
                                    placeholder="telefono"
                                    name="phone"
                                    id="phone"
                                    onKeyDown={handleOnKeyDownPhone}
                                    onChange={fillOutForm}
                                />
                                {errorPhone && <p className="error">El teléfono es requerido</p>}
                            </div>
                            <p>Total: ${getTotal()}</p>
                            <div>
                                <button className="botonEnviar" type="submit">Enviar</button>
                            </div>
                        </form>
                   
                </div>
            )}
        </div>
    );
};
export default FormContainer ;
