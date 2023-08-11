import useOnline from '../utils/customhook'
import { useContext } from 'react'
import Usercontext from '../utils/Usercontext'
const Footer=()=>{
  const isonline=useOnline()
  const{logUser}=useContext(Usercontext)
    return(
      <>
    
      <div className="bg-slate-500 text-center text-cyan-50 font-medium mt-1">     
        <h3 data-testid="online-status">Online status:{isonline?"✅":"🔴"}</h3>
       {logUser}
       
      </div>
 
      </>
    )
  }
export default Footer