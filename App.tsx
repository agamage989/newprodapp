import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import {ProductLists} from './app/screens/productsList';
import {ProductDetails} from './app/screens/productsDetails';

const App = (props: any) => (
  <>
    <Router {...props}>
      <Stack {...props} key="root">
        <Scene key="productLists" component={ProductLists} title="ProductLists" />
        <Scene key="productDetails" component={ProductDetails} title="ProductDetails" />
        {props.children}
      </Stack>
    </Router>
  </>
);

export default App;
