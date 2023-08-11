import React, { Suspense, useState } from "react"
import { lazy } from "react"
import  ReactDOM  from "react-dom/client"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Body from "./components/Body"
import About from './components/About'
import Error from './components/Error'
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import { Outlet } from "react-router-dom"
import Hotelmenu from "./components/Hotelmenu"
import Shimmer from "./components/Shimmer"
import Usercontext from "./utils/Usercontext"
import { Provider } from "react-redux"
import store from "./utils/store"
import Foodcart from "./components/Foodcart"


const Groccery=lazy(()=>import('./components/Groccery'))
const App=()=>{
  const[data,setData]=useState('')
  return(
 
 <Provider store={store}>
        <Header/>
        <Outlet/> 
        <Footer/>
   </Provider>
 
  )
}
const approuter=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children: [
      {
      path:'/',
      element:<Body/>
    },
    {
      path:'/home',
      element:<Body/>
    },
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/cart',
      element:<Foodcart/>
    },
    {
      path:'/hotelmenu/:resId',
      element:<Hotelmenu/>
    },
    {
      path:'/groccery',
      element:<Suspense fallback={<Shimmer/>}><Groccery/></Suspense>
    }
    ],
    errorElement:<Error/>
  },
 
])

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={approuter}/>)