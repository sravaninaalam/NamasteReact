import { useRouteError } from "react-router-dom"

function Error() {
     const error=useRouteError()
    
  return(
    <center>
        <h1>{error.status}: {error.statusText}!!</h1>
   </center>
  )
}
export default Error