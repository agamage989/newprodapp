import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

import ProductReducer from '../reducer/products';

export const store = configureStore({
  reducer: {
    productReducer: ProductReducer,
  },
});

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export type RootState = ReturnType<typeof store.getState>;
