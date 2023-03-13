import { Children, useEffect } from "react"
import { useSelector } from "react-redux"
import { loginAction, refreshJwtAction } from "../redux/apiActions"
import { Navigate, Route, useLocation, useNavigate } from 'react-router-dom';

export const ProtectedRoutes = ({children}) =>{
    const selector = useSelector(state=>state.auth)
    const navigate = useNavigate();

    useEffect(()=>{
        let data = localStorage.getItem('token')
        console.log("selector----->",selector,)
        // if(!selector.authenticated){
        //     refreshJwtAction()
        // }else{
        // navigate('/login');

        // }
    },[])


    if (selector.authenticated) {
        return children;
      } 
      return <Navigate to="/"></Navigate>;
}