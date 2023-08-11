import Card from "../Card"
import {render,screen} from '@testing-library/react'
import "@testing-library/jest-dom"
import Rescardmock from '../mocks/Rescardmock.json'
test("should load restaruarant card with props data",()=>{
    render(
        <Card reslist={Rescardmock}/>
    )
    const htl_name=screen.getByText("Chai Point")
    expect(htl_name).toBeInTheDocument()
})