// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    data: [
      { name: 'Category A', value: 300 },
      { name: 'Category B', value: 200 },
      { name: 'Category C', value: 100 },
    ],
  },
  reducers: {
    updateDataValue: (state, action) => {
      const { index, newValue } = action.payload;
      if (state.data[index]) {
        state.data[index].value = newValue;
      }
    },
  },
});

export const { updateDataValue } = counterSlice.actions;
export default counterSlice.reducer;
