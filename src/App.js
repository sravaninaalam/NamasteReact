import React from "react"
import  ReactDOM  from "react-dom/client"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Body from "./components/Body"
import About from './components/About'
import Error from './components/Error'
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import { Outlet } from "react-router-dom"
const App=()=>{
  return(
  <div className="app">
      <Header/>
      <Outlet/>
      <Footer/>
  
  </div>
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
    }
    ],
    errorElement:<Error/>
  },
 
])

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={approuter}/>)