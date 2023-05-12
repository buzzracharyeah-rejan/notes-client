import { createAsyncThunk } from '@reduxjs/toolkit';
import apiService from '../../services/api';

export const getNotes = createAsyncThunk('/getNotes', async (payload) => {
  try {
    const { data } = await apiService.get(`/notes`);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const deleteNote = createAsyncThunk('/deleteNote', async (id) => {
  try {
    const { data } = await apiService.delete(`/notes/delete/${id}`);
    if (data.status === 'success') {
      const { data } = await apiService.get(`/notes`);
      return data;
    }
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const updateNote = createAsyncThunk('/updateNote', async (id) => {
  try {
    const { data } = await apiService.post(`/notes/update/${id}`);
    if (data.status === 'success') {
      const { data } = await apiService.get(`/notes`);
      return data;
    }
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const createNote = createAsyncThunk('/createNote', async (payload) => {
  try {
    const { data } = await apiService.post(`/notes/create`, payload);
    if (data.status === 'success') {
      const { data } = await apiService.get(`/notes`);
      return data;
    }
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
