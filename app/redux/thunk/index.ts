import {createAsyncThunk} from '@reduxjs/toolkit';
import {productsAPI} from '../api';

export const fetchAllProducts = createAsyncThunk(
  'products/fetchAll',
  async () => {
    const response = await productsAPI();
    return response.data;
  },
);
