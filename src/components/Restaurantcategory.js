
import Itemslist from "./Itemslist"
const Restaurantcategory=({category,showItems,setShowItemsIndex,hide})=>{
 
  const handleClick=()=>{
    setShowItemsIndex()
  }

    return(
        <div className="bg-slate-50 shadow-lg my-5 w-6/12 mx-auto p-4">
          <div className="flex justify-between" onClick={handleClick} onDoubleClick={()=>hide()}>
                <span className="font-bold"> {category.title} ({category.itemCards.length})</span>
                <span>🔽</span>
          </div>
          <div>
           {showItems && <Itemslist items={category.itemCards}/>}
          </div>
        </div>
    )

}
export default Restaurantcategory