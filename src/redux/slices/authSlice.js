import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authenticated: false,
  loading: false,
  token:'',
  loginType:''
};

export const authSlice = createSlice({
  name: 'LOGIN',
  initialState,
  reducers: {
    loginSuccessAction: (state, action) => {
      console.log("succes---->",action)
      state.authenticated = true;
      state.loading = false;
      state.token = action.payload.token
      state.loginType = action.payload.loginType
    },
    loginLoadingAction: (state, action) => {
      state.authenticated = false;
      state.loading = true;
      state.token = ""
      
    },
    logoutAction: (state, action) => {
      console.log("fefef==>")
      state.authenticated = false;
      state.loading = false;
      state.token = ""

    },
  },
});

// Action creators are generated for each case reducer function
export const { loginSuccessAction, loginLoadingAction, logoutAction } =
  authSlice.actions;

export default authSlice.reducer;
