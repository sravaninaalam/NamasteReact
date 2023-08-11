 import { useState,useEffect } from "react"
 import { HTL_MENU } from "./constants"
import { HOME_API } from "./constants"
 const useOnline=()=>{
     
    const[isonline,setIsOnline]=useState(true)
   const handleOnline =()=>{setIsOnline(true) }
   const handleOffline=()=>{setIsOnline(false)}
   useEffect(()=>{
         window.addEventListener("online",handleOnline)
         window.addEventListener("offline",handleOffline)
        return()=>{
            window.removeEventListener("online",handleOnline)
           window. removeEventListener("offline",handleOffline)
        }
   },[])
   return isonline
}

export default  useOnline


export const useMenu=(resId)=>{
   const[menudata,setMenuData]=useState(null)
   useEffect(()=>{
      fetchData()
   },[])

      async function fetchData(){
         const data=await fetch(HTL_MENU+resId)
         const json=await data.json()
         console.log(json)
         setMenuData(json.data)
      }
    return menudata
}

