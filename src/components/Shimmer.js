function Shimmer(){
    return(
        <div className="mt-2 flex flex-wrap">
           {Array(20).fill("").map((e,index)=>(
             <div key={index} className="w-72 h-52 bg-gray-300 m-4">

           </div>))}
        </div>
    )
}
export default Shimmer