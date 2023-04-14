import {createAsyncThunk} from '@reduxjs/toolkit';
import {productsAPI} from '../api';

export const fetchAllProducts = createAsyncThunk(
  'products/fetchAll',
  async () => {
    try {
      const response = await productsAPI();
      return response?.json();
    } catch (ex) {
      return null;
    }
  },
);
