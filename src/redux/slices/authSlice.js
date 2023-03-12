import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authenticated: false,
  loading: false,
  token:'',
};

export const authSlice = createSlice({
  name: 'LOGIN',
  initialState,
  reducers: {
    loginSuccessAction: (state, action) => {
      state.authenticated = true;
      state.loading = false;
      state.token = action.payload
    },
    loginLoadingAction: (state, action) => {
      state.authenticated = false;
      state.loading = true;
      state.token = ""
    },
    logoutAction: (state, action) => {
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
