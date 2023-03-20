import { useEffect } from "react"

let x = document.cookie;

const HandleGoogleAuth = () =>{

    useEffect(()=>{
      let x = document.cookie;
        console.log("=======>",x)
    },[])
      console.log("=======>",x)
    return(
        <div>Logged in</div>
    )

}

export default HandleGoogleAuth