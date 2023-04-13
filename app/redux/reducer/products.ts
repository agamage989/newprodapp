import {createSlice} from '@reduxjs/toolkit';

import {fetchAllProducts} from '../thunk';

const initialState = {
  data: [],
  fetching: false,
  selectedProduct: {},
};

export const ProductReducer = createSlice({
  name: 'products',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
        console.log("state", state);
        console.log("action", action);
        // state change here
        state.data = action.payload;
    });
  },
});

export default ProductReducer.reducer;
