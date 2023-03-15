import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  orderId:"",
currency:"",
amount:""
}

export const paymentSlice = createSlice({
  name: 'MARKET/CONTENT',
  initialState,
  reducers: {
    paymentOrderAction: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.orderId = action.payload.orderId
      state.currency = action.payload.currency
      state.amount = action.payload.amount
    },
    
   
  },
})

// Action creators are generated for each case reducer function
export const { paymentOrderAction } = paymentSlice.actions

export default paymentSlice.reducer