import { configureStore } from '@reduxjs/toolkit';
import noteReducer from './slices/notesSlice';
import modalReducer from './slices/modalSlice';

export const store = configureStore({
  reducer: {
    notes: noteReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
