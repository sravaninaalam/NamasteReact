import { useDispatch, useSelector } from "react-redux"
import Cartcards from "./Cartcards"
import { clearCart } from "../utils/cartSlice"
import Itemlist from './Itemslist'
const Foodcart=()=>{
 
  const cartItems=useSelector(store=>store.cart.items)
  const dispatch=useDispatch()
  console.log(...cartItems)
  
    return(
        <>
           <div className="flex justify-center">
                <h1 className="font-bold m-3 text-center text-2xl">Cart Items-{cartItems.length}</h1>
                {cartItems.length ?
                <button className="rounded-lg bg-purple-200 p-2 m-3 " onClick={()=>dispatch(clearCart())}>CLEAR CART</button>:""} 
           </div>        
                 
          <div className="flex flex-wrap">
          {cartItems?.map(items=>
                    <div key={items.id} data-testid="cartcard">
                                <Cartcards {...items} />
                    </div>
           )}
          </div>
        </>
    )  
}
export default Foodcart