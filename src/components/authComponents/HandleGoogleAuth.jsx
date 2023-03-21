import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { googleAuthSuccessAction } from "../../redux/apiActions"


const HandleGoogleAuth = () =>{
    let dispatch = useDispatch()
    useEffect(()=>{
        dispatch(googleAuthSuccessAction())
    },[])
      
    return(
        <div>Logged in</div>
    )

}

export default HandleGoogleAuth