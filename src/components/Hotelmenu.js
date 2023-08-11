
import Shimmer from "./Shimmer"
import { CDN_IMGURL } from "../utils/constants"
import { useParams } from "react-router-dom"
import useOnline from "../utils/customhook"
import { useMenu } from "../utils/customhook"
import Restaurantcategory from "./Restaurantcategory"
import { useState } from "react"
const Hotelmenu=()=>{
   
   const {resId}=useParams()
   const menudata=useMenu(resId)
   const [showItemsIndex,setShowItemsIndex]=useState(0)
   const isonline=useOnline()
    if(!isonline){
        return(<h1>You are offline</h1>)
    }
       if(!menudata){
        return <Shimmer/>
       }
      
    const {name,cuisines,costForTwoMessage}=menudata?.cards[0]?.card.card.info
   const category= menudata?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.
       filter(c=>c.card?.card?.["@type"]==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
 
       return (
        
        <>
            <div className="text-center my-5" data-testid="menu">
                    <h1 className="font-extrabold">{name}</h1>  
                    <h3>{cuisines.join(',')}</h3> 
                    <h4>{costForTwoMessage}</h4>
                    {category.map((category,index)=><Restaurantcategory key={category.card.card.title} 
                    category={category?.card?.card} showItems={index===showItemsIndex}
                     setShowItemsIndex={()=>setShowItemsIndex(index)} hide={()=>setShowItemsIndex(null)}/>)}
            </div> 
        </>
    )
}
export default Hotelmenu