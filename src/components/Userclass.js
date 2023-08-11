import React from "react"
import Usercontext from '../utils/Usercontext'
class Userclass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            search:""
        }
        // console.log("cnstrctr chid")
    }

    
    render(){
        // console.log("render child")
        const {name,location}=this.props

        return(
            <div className="mt-3">
                <h1>Name-{name}</h1>
                <h1>Location-{location}</h1>
              <Usercontext.Consumer>
                {({logUser})=><h2 className="font-bold p-2 m-2">{logUser}</h2>}
               </Usercontext.Consumer>
            </div>
        )
    }
}
export default Userclass