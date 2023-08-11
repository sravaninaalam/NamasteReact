import {  useState } from 'react'
import {LOGO_URL} from '../utils/constants'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {Home,ShoppingCart} from 'lucide-react'

export const Header=()=>{

    let[islogged,setIsLogged]=useState('Login')
    const total_items=useSelector(store=>store.cart.items)
  

    return(
      <>
        <div className="flex bg-pink-200 justify-between shadow-md ">
           <div>
              <img src={LOGO_URL}
               alt="food logo" className="h-20 p-3"/>
                
           </div >
           <div className='flex items-center'>
            <ul className='flex'>
            <Link to='/'> 
                <li className='px-4 flex'>
                      <Home className='mx-1'/>Home
                 </li>
              </Link>
              <Link to='/about'>
                 <li className='px-4'>About Us</li>
              </Link>
              <Link to='/groccery'>
                  <li className='px-4'> GrocceryMart</li>
              </Link>
            <Link to='/cart'> <li className='px-4 flex'><ShoppingCart className='mx-1'/>Cart-{total_items.length}
            </li></Link>
         
              <button className='px-4' onClick={()=>{
                islogged==="Login"?setIsLogged("Logout"):setIsLogged("Login")
              }}>{islogged}</button>
              </ul>
           </div>
        </div>
      </>
    )
  }


  export default Header