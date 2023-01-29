import { configureStore } from '@reduxjs/toolkit'
import marketContentSlice from "./slices/marketContentSlice"
export const store = configureStore({
  reducer: {
    marketContent: marketContentSlice,
  },
})