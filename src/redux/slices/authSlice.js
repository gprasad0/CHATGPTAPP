import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authenticated: false,
  loading: false,
};

export const authSlice = createSlice({
  name: 'LOGIN',
  initialState,
  reducers: {
    loginSuccessAction: (state, action) => {
      state.authenticated = true;
      state.loading = false;
    },
    loginLoadingAction: (state, action) => {
      state.authenticated = false;
      state.loading = true;
    },
    logoutAction: (state, action) => {
      state.authenticated = false;
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginSuccessAction, loginLoadingAction, logoutAction } =
  authSlice.actions;

export default authSlice.reducer;
