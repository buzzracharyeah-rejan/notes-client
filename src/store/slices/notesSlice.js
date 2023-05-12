import { createSlice } from '@reduxjs/toolkit';
import { getProductsList } from '../actions/notesActions';

const initialState = {
  data: [],
  isLoading: false,
  error: '',
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  extraReducers: {
    [getProductsList.pending]: (state) => {
      state.isLoading = true;
    },
    [getProductsList.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    },
    [getProductsList.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default notesSlice.reducer;
