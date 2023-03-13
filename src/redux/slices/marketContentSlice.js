import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  marketContentData : [],
  token : 90,
  tokenExpired:false
}

export const marketContentSlice = createSlice({
  name: 'MARKET/CONTENT',
  initialState,
  reducers: {
    marketContentAction: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.marketContentData = action.payload
      state.tokenExpired = false

    },
    tokenExceededAction: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.tokenExpired = true
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { marketContentAction,tokenExceededAction } = marketContentSlice.actions

export default marketContentSlice.reducer