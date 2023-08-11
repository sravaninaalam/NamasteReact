import menudata from '../mocks/menudata.json'
import {fireEvent, render,screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import Menu from '../Hotelmenu'
import Cart from '../Foodcart'
import { StaticRouter } from 'react-router-dom/server'
import {act} from 'react-dom/test-utils'
import Header from '../Header'
import { Provider } from 'react-redux'
import store from '../../utils/store'
global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(menudata)
        }
    })
})
test("should uload menu component",async()=>{

        await act(async()=>{          
                render(
                   <StaticRouter>
                      <Provider store={store}>
                        <Header/>
                        <Menu/>
                        <Cart/>
                      </Provider>
                   </StaticRouter> 
                )
        })
        const res_menu=screen.getByTestId("menu")
        expect(res_menu).toBeInTheDocument()

        const acordian=screen.getByText("Peri Peri Chicken (5)")
        fireEvent.click(acordian)
        const itemlist=screen.getAllByTestId("items-list")
        expect(itemlist.length).toBe(5)
        const addbtns=screen.getAllByRole("button",{name:"ADD+"})
        fireEvent.click(addbtns[0])
        fireEvent.click(addbtns[2])
        expect(screen.getByText("Cart-2")).toBeInTheDocument()
        // checking weather cart component length is equal to 2 or not
        expect(screen.getAllByTestId("cartcard").length).toBe(2)

        // clear cart
        fireEvent.click(screen.getByRole("button", {name:"CLEAR CART"}))

        expect(screen.getByText("Cart-0")).toBeInTheDocument()
})
