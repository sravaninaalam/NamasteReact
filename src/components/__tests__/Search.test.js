import Body from '../Body'
import { buildQueries, fireEvent, render,screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import mockdata from '../mocks/mockdata.json'
import {StaticRouter} from 'react-router-dom/server'
import { act } from 'react-dom/test-utils'
import { hasUncaughtExceptionCaptureCallback } from 'process'
global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(mockdata)
        }
    })
})
test("should load search on render",async()=>{
   
    await act(async()=>render(
        <StaticRouter>
            <Body/>
        </StaticRouter>
    ))

    const search=screen.getByRole("button",{name:"Search"})
  
     expect(search).toBeInTheDocument()
})


test("should load search function on render",async()=>{
   
    await act(async()=>render(
        <StaticRouter>
            <Body/>
        </StaticRouter>
    ))
 


    const cards=screen.getAllByTestId("rescard") 
        expect(cards.length).toBe(20)
    const search=screen.getByRole("button",{name:"Search"})
      const input=screen.getByTestId("search-ip")
     fireEvent.change(input,{target:{value:"palace"}})
    fireEvent.click(search)
    const rescards=screen.getAllByTestId("rescard")
   expect(rescards.length).toBe(1)


})

test("should filter top rated restaurants",async()=>{
   
    await act(async()=>render(
        <StaticRouter>
            <Body/>
        </StaticRouter>
    ))

  const cards=screen.getAllByTestId("rescard")
  expect(cards.length).toBe(20)
  const toprated=screen.getByRole('button',{name:"⭐TopRatedFoods"})
  fireEvent.click(toprated)
  const rescards=screen.getAllByTestId("rescard")
  expect(rescards.length).toBe(16)
})

