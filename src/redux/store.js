import { configureStore } from '@reduxjs/toolkit'
import marketContentSlice from "./slices/marketContentSlice"
import authSlice from "./slices/authSlice"
import paymentSlice from './slices/paymentSlice'
export const store = configureStore({
  reducer: {
    marketContent: marketContentSlice,
    auth: authSlice,
    payment: paymentSlice
  },
})