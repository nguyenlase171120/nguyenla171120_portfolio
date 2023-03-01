import { createSlice } from "@reduxjs/toolkit";

const settingSlice = createSlice({
  name: "settings",
  initialState: {
    isMobile: false,
  },
  reducers: {
    setMobileState: (state, action) => {
      state.isMobile = action.payload;
    },
  },
});

export const { setMobileState } = settingSlice.actions;
export default settingSlice.reducer;
