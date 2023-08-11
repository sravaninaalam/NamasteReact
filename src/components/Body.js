import { useState,useEffect} from 'react'
import Card, { Promotedlabel } from './Card'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
import { HOME_API } from '../utils/constants'
import useOnline  from '../utils/customhook'
import searchfunc from '../utils/constants'



  const Body=()=>{
  
     const[datalist,setDataList]=useState([])
     const[clonedata,setCloneData]=useState([])
     const[searchinp,setSearchInp]=useState()

    const Promotedcard=Promotedlabel(Card)
    
     useEffect(()=>{
      fetchData()
     },[])
   
     async function fetchData(){
      const res= await fetch(HOME_API)
      const json=await res.json()
        // setDataList(json?.data?.cards[2]?.data?.data?.cards)
        // setCloneData(json?.data?.cards[2]?.data?.data?.cards)
        setDataList( json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setCloneData( json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       
    } 
  
    const isonline=useOnline()
    if(!isonline){return<h1>You are ofline 👩🏾‍💼</h1>}

      return (clonedata.length===0)?<Shimmer/>:(      
      <>
    
      <div className="mt-5 bg-gray-100 shadow-sm">
     
           <input data-testid="search-ip" type="text" placeholder="search Restaurants" className="my-4 ml-5 mr-1 w-64 p-1 border border-black rounded-md"
                value={searchinp} onChange={(e)=>setSearchInp(e.target.value)}/>
               
                <button className='bg-lime-300 my-3 mr-2 px-4 p-2 rounded-lg' 
                onClick={()=>{const res=searchfunc(searchinp,clonedata)
                            setDataList(res)
                          }
                }>Search</button>
     
               <button className='bg-blue-300 px-4 py-2 rounded-lg my-3 mr-5 m float-right'onClick={()=>{
              const filtered=clonedata.filter(i=>i.info.avgRating>4)
              setDataList(filtered)
            }}>⭐TopRatedFoods</button>
          
      </div>    
            <div className='mt-4 flex flex-wrap'>
            {datalist.map(restaurant=>(
         
            <Link key={restaurant?.info?.id} to={'/hotelmenu/'+restaurant?.info?.id} >
                   {restaurant?.info?.promoted?<Promotedcard reslist={restaurant?.info}/>:<Card reslist={restaurant?.info}/>}
            </Link>
           
            ) )}
            </div>    
           
      </>
    )

  }
  export default Body


  