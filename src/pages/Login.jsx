import React, { useEffect, useState } from 'react';
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button,
} from '@mui/material';
import { InstallDesktopTwoTone } from '@mui/icons-material';
import googleImg from "../assets/google.png";
import { loginAction, userRegistrationAction } from '../redux/apiActions';
import { useDispatch } from 'react-redux';
import { ColorButton,MarginDiv } from '../components/commonStyledComponents';
import SignUpModal from '../components/SignUpModal';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const [signUp,setSignUp] = useState(false)
  const  handleLogin = () =>{
    // const googleAuth = () =>{
    //   InstallDesktopTwoTone.open(`${import.meta.env.VITE_BACKEND_APP_URL}/auth/google/callback`,"_self")
    // }
    window.open("http://localhost:3000/auth/google","_self")
  }


  const handleNormalLogin = () =>{
    // dispatch(userRegistrationAction())
    dispatch(loginAction())

    
  }

  const closeModal = () => {
    setSignUp(false)
  }

  const handleSignUp = () =>{
    setSignUp(true)
  }

  return (
    <div style={{ width: '100vw', height: '100%',background:"#f9fafc",display:"flex",justifyContent:"center",alignItems:"center" }}>
      <div style={{ padding: 10, width: '30vw', margin: '0 auto' }}>
        <Paper
          sx={{
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            
            opacity: 0.8,
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
          }}
        >
         
            <h1
              style={{
                // fontFamily: 'monospace',
                color: '#153d70',
                fontWeight: 'bold',
                // marginLeft: '24px',
              }}
              onClick={handleLogin}
            >
              SIGN IN
            </h1>
           <MarginDiv>
              <TextField
                label='Email'
                name='Email'
                // onChange={handleFormEvents}
              ></TextField>
            </MarginDiv>
            <div>
              <TextField
                label='Password'
                name='password'
                // onChange={handleFormEvents}
                type={'password'}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    // handleLogin();
                  }
                }}
              ></TextField>
              </div>
            
              
              <ColorButton
            width={100}
            marginTop={20}
              onClick={handleLogin}
            >
             LOGIN
            </ColorButton>
            
            
              <MarginDiv style={{marginTop:"4px",marginBottom:"4px"}}>or</MarginDiv>
             
            
                
            
             
             
              <button style={{
                 width: "15vw",
                 height: "40px",
                 borderRadius: "5px",
                 border: "none",
                 outline: "none",
                 backgroundColor: "white",
                 boxShadow: "rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px",
                 fontSize: "16px",
                 fontWeight: "500",
                 margin: "0 0 20px 0",
                 color: "#2c444e",
                 cursor: "pointer",
                 display: "flex",
                 alignItems: "center",
                 justifyContent: "center",
                 position: "relative",
                 padding:"10px"
              }} 
              onClick={handleLogin}
              >
						<img style= {{width:"24px",marginRight:"14px"}} src={googleImg} alt="google icon" />
						<span>Sign in with Google</span>
					</button>
            
          <MarginDiv style={{marginTop:"5px",marginBottom:"10px"}}>New Here? <span style={{color: 'rgb(244 162 0)',fontWeight:800,cursor:"pointer"}} onClick={handleSignUp}>Sign Up</span></MarginDiv>

          {/* </Grid> */}
        </Paper>
        {signUp && <SignUpModal openDialog={signUp}  closeDialog={closeModal}/>}
        

        {/* openDialog={submitModal}  closeDialog={closeModal} */}

        {/* <Snackbar
          open={errorModal}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity='error' sx={{ width: '100%' }}>
            {errorData}
          </Alert>
        </Snackbar> */}
      </div>
    </div>
  );
};
