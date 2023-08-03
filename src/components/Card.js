import { CDN_URL } from "../utils/constants"
const Card=(props)=>{
  const{foodList}=props
   const{cloudinaryImageId,name,avgRating,
    
    costForTwo}=foodList?.data
    return(<>
        <div className="card">
           <img alt="FOODITEM" className="card-img"
            src={CDN_URL+ cloudinaryImageId}/>
          <h3>{name}</h3>
          
          <h3>{costForTwo/100}FOR TWO</h3>
          <h3>{avgRating}</h3>
        </div>
  
    </>)
  }
  export default Card