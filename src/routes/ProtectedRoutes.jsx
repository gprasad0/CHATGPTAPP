import { Children, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { googleAuthSuccessAction, loginAction, refreshJwtAction } from "../redux/apiActions"
import { Navigate, Route, useLocation, useNavigate } from 'react-router-dom';

export const ProtectedRoutes = ({children}) =>{
    const selector = useSelector(state=>state.auth)
    const navigate = useNavigate();
    const dispatch = useDispatch()

    useEffect(()=>{
        let data = localStorage.getItem('token')
        let userType = localStorage.getItem("userType")
        console.log("userType===>",userType,selector.authenticated)
        if(userType == "googleLogin" && !selector.authenticated){
            dispatch(googleAuthSuccessAction())

        }else{

        }
        console.log("selector----->",selector,)
        // if(!selector.authenticated){
        //     refreshJwtAction()
        // }else{
        // navigate('/login');

        // }
    },[])


    if (selector.authenticated) {
        return children;
      } else{
        return <Navigate to="/"></Navigate>;
      }
    //   
}