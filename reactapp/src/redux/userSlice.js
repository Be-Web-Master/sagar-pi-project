import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: [],
    adminData: [],
  },
  reducers: {
    addUserData: (state, action) => {
      state.userData.push(action.payload);
    },
    addAdminData: (state, action) => {
      state.adminData.push(action.payload);
    },
  },
});

export const { addUserData, addAdminData } = userSlice.actions;

export default userSlice.reducer;
