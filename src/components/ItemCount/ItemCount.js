import { useState } from 'react'

const ItemCount = ({stock = 1, initial = 1, onAdd})=> {
   const [cantidad , setCantidad] = useState(initial)

   const increment = () => {
       if(cantidad < stock) {
           setCantidad(cantidad+1)
       }
   }

   const decrement = () => {
       if(cantidad> 0) {
           setCantidad(cantidad - 1)
       }     
   }

   return(
       <div align="center">          
           <table >
               <tbody>
                   <tr>
                       <td ><button className="Option" onClick={()=> decrement() }>-</button></td>
                       <td style={{fontSize : '2rem' , color : 'red'}}>{cantidad}</td>
                       <td ><button className="Option" onClick={() => increment() }>+</button></td>
                   </tr>
                   <tr>
                       <td  colSpan="5"><button className="Option" onClick={() => onAdd(cantidad)}>Agregar al carrito</button></td>
                   </tr>

               </tbody>
           </table>       
       </div>
   )

}
export default ItemCount