import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import { ProductLists } from './app/screens/productsList';
import { ProductDetails } from './app/screens/productsDetails';
import { Provider } from 'react-redux';

import { store } from './app/redux/store';
import { ScreenHeader } from './app/components/screenHeaderComponent';

const App = (props: any) => {
  return (
    <>
      <Provider store={store}>
        <Router {...props} onStateChange={() => { }}>
          <Stack
            {...props}
            key="root"
            navTransparent
            navigationBarStyle={{
              backgroundColor: '#894927',
              margin: 0,
            }}>
            <Scene
              key="productLists"
              component={ProductLists}
              navBar={() => <ScreenHeader {...props} title="PRODUCT_LIST_HEADER" colors={['#4c669f', '#3b5998', '#192f6a']} />}
            />
            <Scene
              key="productDetails"
              component={ProductDetails}
              navBar={() => (
                <ScreenHeader {...props} back title="PRODUCT_DETAIL_HEADER" colors={['#4db6ac', '#00796b', '#192f6a']} />
              )}
            />
            {props.children}
          </Stack>
        </Router>
      </Provider>
    </>
  );
}

export default App;
