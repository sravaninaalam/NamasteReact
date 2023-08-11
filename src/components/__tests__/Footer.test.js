import Footer from '../Footer'
import "@testing-library/jest-dom"
import {render,screen} from '@testing-library/react'

it("should load Footer on render",()=>{

        render(
            <Footer/>
        )
        const footer=screen.getByTestId("online-status")
        expect(footer).toBeInTheDocument()
})