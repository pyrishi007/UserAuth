import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: [],
  },

  reducers: {
    userProfile: (state, action) => {
      state.userInfo.push(action.payload);
    },
  },
});

export const { userProfile } = userSlice.actions;
export default userSlice.reducer;
