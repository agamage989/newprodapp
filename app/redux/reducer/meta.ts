import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isPromotionActive: true,
  title: '25% Discount',
  subtitle: 'Enjoy it now',
};

export const MetaReducer = createSlice({
  name: 'meta',
  initialState,
  reducers: {},
});

export default MetaReducer.reducer;
