import {createSlice} from '@reduxjs/toolkit';

import {fetchAllProducts} from '../thunk';

const initialState = {
  data: [],
  total: 0,
  fetching: false,
  selectedProduct: {},
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
