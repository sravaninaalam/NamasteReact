import { useState,useEffect } from 'react'
import Data from '../utils/Data'
import Card from './Card'
import Shimmer from './Shimmer'


function searchfunc(search,clone){
  return(
   clone.filter(f=>f.data.name.toLowerCase().includes(search.toLowerCase()))
  )
}
  const Body=()=>{
    
     const[datalist,setDataList]=useState([])
     const[clonedata,setCloneData]=useState([])
     const[searchinp,setSearchInp]=useState()
    
     useEffect(()=>{
      fetchData()
     },[])

     async function fetchData(){

      const res= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
      const json=await res.json()
        setDataList(json?.data?.cards[2]?.data?.data?.cards)
        setCloneData(json?.data?.cards[2]?.data?.data?.cards)

    }  
      return clonedata.length===0?<Shimmer/>:(
      
      <>
           {/* {datalist.length===0?<Shimmer/>
           : */}
     <div>
      <div className="searchbox">
            <input type="text" placeholder="search items here" className="search"
            value={searchinp} onChange={(e)=>setSearchInp(e.target.value)}/>
            
            <button onClick={()=>{
              const res=searchfunc(searchinp,clonedata)
              setDataList(res)
            }
            }>Search</button>
         
           &nbsp; <button className='filttername'onClick={()=>{
          const filtered=clonedata.filter(i=>i.data.avgRating>4)
          setDataList(filtered)
        }}>TopRatedFoods</button>
      </div>    
     
      <div className="cardcontainer">
       {datalist.map(food=><Card key={food.data.id} foodList={food}/>)}
      </div>
 </div>
 {/* } */}
      </>
    )
 
  }
  export default Body


  