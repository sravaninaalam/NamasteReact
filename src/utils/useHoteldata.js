import { useEffect,useState } from "react"
import { HOME_API } from "./constants"
function useHoteldata(){
    const [hoteldata,setHoteldata]=useState([])
    useEffect(()=>{
        fetchData()
    },[])

    async function fetchData(){
        const res=await fetch(HOME_API)
        const json=await res.json()
        setHoteldata(json?.data?.cards[2]?.data?.data?.cards)

    }
    return (
        [hoteldata]
       
        )
}
export default useHoteldata