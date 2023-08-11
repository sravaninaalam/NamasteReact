import { Component } from "react"
import Userclass from "./Userclass"

import Usercontext from "../utils/Usercontext"

class About extends Component{
    constructor(props){
        super(props)
    }
   
    render(){
    
        return(
            <div className="my-10 p-5 mx-5 border container text-center ">
                <h1 className="font-extrabold" data-testid="ab">This is about page</h1>
    
                <Userclass name={"Sravani Naalam"}location={"vzm"}/>
            </div>
        )
    }
}
export default About