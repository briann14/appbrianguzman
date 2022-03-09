import { createContext, useEffect, useState } from 'react';

 const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cantidad, setCantidad] = useState(0);
    useEffect(() => {
        console.log(cart);
    }, [cart]);

    const Agregando = (item, cantidad) => {
        if (isInCart(item.id)){
             sumarCantidad(item, cantidad)
            }else{
             setCart([...cart, { ...item, cantidad }]);
    }}

    const isInCart = (id) => {
        return cart.some((producto) => producto.id === id);
    };

  
    const sumarCantidad = (item, cantidad) => {
        const newProducts = cart.map((prod) => {
            if (prod.id === item.id) {
                const newProduct = {
                    ...prod,
                    cantidad: prod.cantidad + cantidad,
                };
                return newProduct;
            } else {
                return prod;
            }
        });
        setCart(newProducts);
    };
    const clearItems = () => {
        setCart([]);
        setCantidad(0);
    };

    return (
        <CartContext.Provider value={{ cart, Agregando , clearItems}}>
          {children}
        </CartContext.Provider>
    );
};
export default CartContext