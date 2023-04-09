import { configureStore } from '@reduxjs/toolkit'
import marketContentSlice from "./slices/marketContentSlice"
import authSlice from "./slices/authSlice"
import paymentSlice from './slices/paymentSlice'
import userSlice from './slices/userSlice'
import signUpSlice from './slices/signUpSlice'
export const store = configureStore({
  reducer: {
    marketContent: marketContentSlice,
    auth: authSlice,
    payment: paymentSlice,
    userData: userSlice,
    signUp: signUpSlice
  },
})