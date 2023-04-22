import { Children, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { googleAuthSuccessAction, loginAction, refreshJwtAction } from "../redux/apiActions"
import { Navigate, Route, useLocation, useNavigate } from 'react-router-dom';
import { loginLoadingAction } from "../redux/slices/authSlice";

export const ProtectedRoutes = ({children}) =>{
    const selector = useSelector(state=>state.auth)
    const navigate = useNavigate();
    const dispatch = useDispatch()

    useEffect(()=>{
        // let data = localStorage.getItem('token')
        let userType = localStorage.getItem("userType")
        console.log("userType===>",userType,selector.authenticated)
        if(userType == "googleLogin" && !selector.authenticated){
            dispatch(googleAuthSuccessAction())

        }else if(!selector.authenticated){
        console.log("selector----->",selector,)
        dispatch(loginLoadingAction())
            dispatch(refreshJwtAction())
        }
        // if(!selector.authenticated){
        //     refreshJwtAction()
        // }else{
        // navigate('/login');

        // }
    },[])

    if(selector.loading){
        return <div>Loading</div>
    }

    if (selector.authenticated) {
        return children;
      } else{
        return <Navigate to="/"></Navigate>;
      }
    //   
}