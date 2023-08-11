import { CDN_IMGURL } from "../utils/constants"

import { useDispatch } from "react-redux"
import { removeItem } from "../utils/cartSlice"

    const Cartcards=({id,name,imageId,price,description,defaultPrice})=>{
      
    const dispatch=useDispatch()
   
    return(
        <>
                 <div className="bg-gray-200 hover:bg-gray-300 m-4 p-1 w-72 ">
                         <img src={CDN_IMGURL+imageId} alt={name} className="rounded-lg p-1"/>
                         <h1 className="font-bold">{name}</h1>
                         <h5 className="truncate hover:overflow-y-
                         clip ">{description}</h5>
                         <h4 className="text-lg font-semibold">₹{price/100 || defaultPrice/100}</h4>
                         <button className="p-2 mx-11 my-2 bg-red-300 rounded-lg "
                         onClick={()=> dispatch(removeItem(id))}>Remove Item</button>
              </div>
           
         </>
         )
 }
 export default Cartcards
 
 