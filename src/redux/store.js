import { configureStore } from '@reduxjs/toolkit'
import marketContentSlice from "./slices/marketContentSlice"
import authSlice from "./slices/authSlice"
export const store = configureStore({
  reducer: {
    marketContent: marketContentSlice,
    auth: authSlice
  },
})