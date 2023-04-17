import {createSlice} from '@reduxjs/toolkit';

import {fetchAllProducts} from '../thunk';

import { DateTime } from 'luxon';

const initialState = {
  data: [],
  total: 0,
  fetching: false,
  reviews: [{
    customerName: 'Regina',
    title: 'Very nice product',
    comment: 'this is a very nice product from this site.',
    date: DateTime.now().toMillis(),
    rate: 3.2
  }, {
    customerName: 'Mathan',
    title: 'Amazing device',
    comment: 'this is a very nice product from this site.',
    date: DateTime.now().toMillis(),
    rate: 4.6
  }]
};

export const ProductReducer = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAllProducts.pending, (state: any) => {
        // state change here
        state.fetching = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        // state change here
        state.fetching = false;
        state.data = action.payload?.products;
        state.total = action.payload?.total;
      })
      .addCase(fetchAllProducts.rejected, (state: any, action) => {
        // state change here
        state.fetching = false;
      });
  },
});

export default ProductReducer.reducer;
