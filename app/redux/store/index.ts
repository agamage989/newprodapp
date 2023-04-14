import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

import ProductReducer from '../reducer/products';
import MetaReducer from '../reducer/meta';

export const store = configureStore({
  reducer: {
    products: ProductReducer,
    meta: MetaReducer,
  },
});

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export type RootState = ReturnType<typeof store.getState>;
