import Header from '../Header'
import {fireEvent, render,screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import { Provider } from 'react-redux'
import store from '../../utils/store'
import {BrowserRouter} from 'react-router-dom'
test("should load header with login button",()=>{
    render(
       <BrowserRouter>
                <Provider store={store}>
                    <Header/>
            </Provider>
       </BrowserRouter>
    )
    // const login_button=screen.getByRole("button")
    const login_button=screen.getByText("Login")
    expect(login_button).toBeInTheDocument()

})

test("should load header with cart empty or zero",()=>{
    render(
       <BrowserRouter>
                <Provider store={store}>
                    <Header/>
            </Provider>
       </BrowserRouter>
    )
   
   
        const cartItems=screen.getByText("Cart-0")
 
    expect(cartItems).toBeInTheDocument()

})

test("should change login to logout",()=>{
    render(
       <BrowserRouter>
                <Provider store={store}>
                    <Header/>
            </Provider>
       </BrowserRouter>
    )
   
    const login_button=screen.getByRole("button",{name:"Login"})
       fireEvent.click(login_button)
       const logout_button=screen.getByRole("button",{name:"Logout"})
    expect(logout_button).toBeInTheDocument()
})