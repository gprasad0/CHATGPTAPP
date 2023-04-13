import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    signUp : false,
    signUpData: ''
}

export const signUpSlice = createSlice({
  name: 'MARKET/CONTENT',
  initialState,
  reducers: {
    signUpDataAction: (state,action) => {
      console.log("signupSelector===>",action)
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.signUp = action.payload.signup,
      state.signUpData = action.payload.signupMessage
    },
    signUpcloseAction:(state,action) => {
      console.log("signupSelector===>",action)
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.signUp = false,
      state.signUpData = ''
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { signUpDataAction,signUpcloseAction } = signUpSlice.actions

export default signUpSlice.reducer