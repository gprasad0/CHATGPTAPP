import axios from 'axios';
import { loginSuccessAction,logoutAction } from './slices/authSlice';
import { marketContentAction } from './slices/marketContentSlice';

export const generateMarketingContentAction =
  (prompt, temp, outputs, multiInput) => async (dispatch) => {
    try {
      let data = await axios({
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`
        },
        url: 'http://localhost:3000/api/storyscape/compose',
        data: {
          prompt,
          outputs,
          temp,
          multiInput
        },
      });

      dispatch(marketContentAction(data.data));
    } catch (e) {
      return console.error(e.message);
    }
  };

  export const userRegistrationAction =
  (prompt, temp, outputs) => async (dispatch) => {
    try {
      let data = await axios({
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`
        },
        url: 'http://localhost:3000/auth/register',
        // data: {
        //   prompt,
        //   outputs,
        //   temp,
        // },
      });

      // dispatch(marketContentAction(data.data));
    } catch (e) {
      return console.error(e.message);
    }
  };


  export const loginAction =
  (loginData) => async (dispatch) => {
    try {
      let data = await axios({
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`
        },
        url: 'http://localhost:3000/auth/login',
        data:loginData
        // data: {
        //   prompt,
        //   outputs,
        //   temp,
        // },
      });

    console.log("data===>",data)
    if(data.status == 200){
      dispatch(loginSuccessAction())
    }else{
      dispatch(logoutAction())

    }

      // dispatch(marketContentAction(data.data));
    } catch (e) {
      return console.error(e.message);
    }
  };

  export const signUpAction =
  (signupData) => async (dispatch) => {
    // console.log("data====>?",data)
    try {
      let data = await axios({
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`
        },
        url: 'http://localhost:3000/auth/signup',
        data: signupData
      });

      // dispatch(marketContentAction(data.data));
    } catch (e) {
      return console.error(e.message);
    }
  };

