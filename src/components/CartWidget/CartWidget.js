
const CartWidget = ({margin = 2 , borderRadius = '2rem' , width = '40px' , numero = 1}) =>{
    
    return(
        <div>
   <img  src = {'./img/carrito.png'}  style ={{margin ,width, borderRadius}} alt = 'logo'/>
       <span>{numero}</span>
        </div>
        
  
    )
}
export default CartWidget