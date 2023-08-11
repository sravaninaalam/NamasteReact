import { CDN_IMGURL, Green_Rating_Img, Yellow_Rating_Img } from "../utils/constants"

const Card=(props)=>{
  const{reslist}=props
   const{cloudinaryImageId,name,cuisines,
  avgRating,
   costForTwo}=reslist
  // console.log(reslist)
    return(
    <>
        <div data-testid="rescard" className="bg-gray-200 hover:bg-gray-300 m-4 p-1 w-72 ">
           <img alt="FOODITEM" className="rounded-md" 
            src={CDN_IMGURL+ cloudinaryImageId}/>
            <h3 className="font-bold">{name}</h3>
            <h4 className="truncate">{cuisines.join(',')}</h4>
            <div className="flex m-1 p-1">
           {avgRating>4?<h4 className="w-5 h-5  flex">
              <img src={Green_Rating_Img} className="rounded-lg"/><span>{avgRating}</span>
               </h4>:<h4 className="w-6 h-6  flex">
                <img className="rounded-lg" src={Yellow_Rating_Img}/>
                {avgRating}</h4>}
              <h4 className="ml-28">{costForTwo}</h4>
           </div>
           
        </div>
  
    </>)
  }

  export default Card

 export const Promotedlabel=(Card)=>{
    return(props)=>{
      return(
        <div>
           <label className=" absolute text-white bg-pink-500 m-2 p-1 rounded-lg">Promoted</label>
           <Card {...props}/>
        </div>
      )
    }
 }
