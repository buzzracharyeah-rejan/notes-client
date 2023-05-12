import { createAsyncThunk } from '@reduxjs/toolkit';
import apiService from '../../services/api';

export const getProductsList = createAsyncThunk('products/getListings', async () => {
  try {
    const { data } = await apiService.get(`/products`);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
