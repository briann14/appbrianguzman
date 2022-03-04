import './CartWidget.css'

const CartWidget = ({margin = 11 ,  width = 40 , numero = 1}) =>{
    
    return(
        <div className="carrito">
   <img  src = {'../img/carrito.png'}  style ={{margin ,width}} alt = 'logo'/>
       <span>{numero}</span>
        </div>
        
  
    )
}
export default CartWidget