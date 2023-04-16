import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import {ProductLists} from './app/screens/productsList';
import {ProductDetails} from './app/screens/productsDetails';
import {Provider} from 'react-redux';

import {store} from './app/redux/store';
import {ScreenHeader} from './app/components/screenHeaderComponent';

const App = (props: any) => (
  <>
    <Provider store={store}>
      <Router {...props}>
        <Stack
          {...props}
          key="root"
          navigationBarStyle={{
            backgroundColor: '#894927',
          }}>
          <Scene
            key="productLists"
            component={ProductLists}
            renderTitle={prop => (
              <ScreenHeader {...prop} title="Products List" isPromotionActive />
            )}
          />
          {/* <Scene
            key="productDetails"
            component={ProductDetails}
            back
            renderTitle={prop => (
              <ScreenHeader {...prop} title="Product Detail" />
            )}
          /> */}
          {props.children}
        </Stack>
      </Router>
    </Provider>
  </>
);

export default App;
