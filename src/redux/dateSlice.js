import { createSlice } from '@reduxjs/toolkit';

export const dateSlice = createSlice({
  name: 'date',
  initialState: {},
  reducers: {
    changeDate: (state, action) => {
      state = action.payload;
    },
  },
});

export const { changeDate } = dateSlice.actions;
export default dateSlice.reducer;
