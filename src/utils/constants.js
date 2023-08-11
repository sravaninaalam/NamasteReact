export const LOGO_URL="https://i.pinimg.com/originals/01/48/66/0148662247327a7d268ce7d02b8662cf.png"

export const CDN_IMGURL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

export const HTL_MENU=
"https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9522009&lng=77.7002645&restaurantId="

export const HOME_API=
"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9522009&lng=77.7002645&page_type=DESKTOP_WEB_LISTING"

export const Green_Rating_Img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn2fO06E83wILT6e9SNlK8MUEtKGAAmj8kzQ&usqp=CAU"
 
export const Yellow_Rating_Img="https://thumbs.dreamstime.com/b/five-point-yellow-star-icon-154791548.jpg"

function searchfunc(search,clone){
  return(
   clone.filter(f=>f.info.name.toLowerCase().includes(search.toLowerCase()))
  )
}
export default searchfunc