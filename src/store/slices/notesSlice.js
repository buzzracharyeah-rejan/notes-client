import { createSlice } from '@reduxjs/toolkit';
import { createNote, deleteNote, getNotes, updateNote } from '../actions/notesActions';

const initialState = {
  data: [],
  isLoading: false,
  error: '',
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  extraReducers: {
    [createNote.pending]: (state) => {
      state.isLoading = true;
    },
    [createNote.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    },
    [createNote.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [getNotes.pending]: (state) => {
      state.isLoading = true;
    },
    [getNotes.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    },
    [getNotes.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [updateNote.pending]: (state) => {
      state.isLoading = true;
    },
    [updateNote.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    },
    [updateNote.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteNote.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteNote.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    },
    [deleteNote.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default notesSlice.reducer;
