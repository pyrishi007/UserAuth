import { createSlice, current } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
  },

  reducers: {
    userProfile: (state, action) => {
      state.userInfo = action.payload;
      console.log(current(state.userInfo));
    },
  },
});

export const { userProfile } = userSlice.actions;
export default userSlice.reducer;