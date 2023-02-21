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

export const LoginPage = () => {

  const  handleLogin = () =>{
    // const googleAuth = () =>{
    //   InstallDesktopTwoTone.open(`${import.meta.env.VITE_BACKEND_APP_URL}/auth/google/callback`,"_self")
    // }
    window.open("http://localhost:3000/auth/google","_self")
  }

  return (
    <div style={{ width: '100vw', height: '100%',background:"orange",display:"flex",justifyContent:"center",alignItems:"center" }}>
      <div style={{ padding: 10, width: '30vw', margin: '0 auto' }}>
        <Paper
          sx={{
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            
            opacity: 0.8,
          }}
        >
          <Grid
            container
            spacing={3}
            direction={'column'}
            justify={'center'}
            alignItems={'center'}
            sx={{ paddingTop: '34px' }}
          >
            <h1
              style={{
                fontFamily: 'monospace',
                color: '#153d70',
                fontWeight: 'bold',
                marginLeft: '24px',
              }}
              onClick={handleLogin}
            >
              STORYSCAPE
            </h1>
            <Grid item xs={12}>
              <TextField
                label='Username'
                name='username'
                // onChange={handleFormEvents}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
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
            </Grid>

            <Grid item xs={12}>
              <Button
                onClick={handleLogin}
                variant='contained'
                sx={{ margin: '0 0 24px 16px' }}
              >
                LOGIN
              </Button>
            </Grid>
          </Grid>
        </Paper>

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
