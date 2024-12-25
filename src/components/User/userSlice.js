// src/store/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    companies: []
  },
  reducers: {
    // Add reducers for user actions
  }
});

export const {} = userSlice.actions;
export default userSlice.reducer;
