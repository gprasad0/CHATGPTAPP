import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  marketContentData : [" frfefefeffef frfefefeffef frfefefeffef frfefefeffef frfefefeffef frfefefeffef frfefefeffef","efefeeffefe"]
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
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { marketContentAction } = marketContentSlice.actions

export default marketContentSlice.reducer