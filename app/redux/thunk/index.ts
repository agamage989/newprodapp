import {createAsyncThunk} from '@reduxjs/toolkit';
import {productsAPI} from '../api';

export const fetchAllProducts = createAsyncThunk(
  'products/fetchAll',
  async () => {
    try {
      console.log('starting');

      const response = await productsAPI();
      console.log('response', response);

      return response?.json();
    } catch (ex) {
      console.error('Ex', ex);
      return null;
    }
  },
);
