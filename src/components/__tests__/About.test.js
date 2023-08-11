import {render,screen} from '@testing-library/react'
import "@testing-library/jest-dom"
import About from '../About'
it("weather that render component loaded or not",()=>{
    render(<About/>)
   const [heading]= screen.getAllByRole("heading")
   expect(heading).toBeInTheDocument()
})