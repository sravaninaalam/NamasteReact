import { useState } from 'react'
import {LOGO_URL} from '../utils/constants'
import { Link } from 'react-router-dom'

export const Header=()=>{
    let[islogged,setIsLogged]=useState('Login')
    return(
      <>
        <div className="header">
           <div className="logo">
              <img src={LOGO_URL}
               alt="food logo" className="logoimg"/>
                
           </div>
          
           <div className="navitems">
            <ul>
              <li>
                <Link to='/'>Home</Link>
               </li>
               <li>
                 <Link to='/about'>About Us</Link>
                </li>
              <li>Cart</li>
            
              <button className='login-btn' onClick={()=>{
                islogged==="Login"?setIsLogged("Logout"):setIsLogged("Login")
              }}>{islogged}</button>
              </ul>
           </div>
        </div>
      </>
    )
  }


  export default Header