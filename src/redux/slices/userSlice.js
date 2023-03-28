import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userType: '',
  name: '',
  email: '',
  id: '',
  oauthId: '',
  apiCount: '',
};

export const userSlice = createSlice({
  name: 'USERDATA',
  initialState,
  reducers: {
    userAction: (state, action) => {
      state.userType = action.payload.source;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.id = action.payload._id;
      state.oauthId = action.payload.id;
      state.apiCount = action.payload.apiCount;
    },
  },
});

// Action creators are generated for each case reducer function
export const { userAction } =
  userSlice.actions;

export default userSlice.reducer;
