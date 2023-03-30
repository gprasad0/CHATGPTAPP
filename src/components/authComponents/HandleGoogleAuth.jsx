import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { googleAuthSuccessAction } from "../../redux/apiActions"


const HandleGoogleAuth = () =>{
    const dispatch = useDispatch()
  const navigate = useNavigate();

  const authenticated = useSelector((state) => state.auth.authenticated);

    useEffect(()=>{
        dispatch(googleAuthSuccessAction())
    },[])

    useEffect(()=>{
        if(authenticated){
            navigate("/home")
        }
    },[authenticated])
      
    return(
        <div>Logged in</div>
    )

}

export default HandleGoogleAuth