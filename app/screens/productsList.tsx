/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {PromotionalHeader} from '../components/promotionalHeader';
import {useAppDispatch} from '../redux/store';
import {fetchAllProducts} from '../redux/thunk';
import {useSelector} from 'react-redux';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {ProductListItemComponent} from '../components/productListItemComponent';
import {Col, Row} from 'react-native-easy-grid';

export const ProductLists = () => {
  const dispatch = useAppDispatch();
  const products = useSelector((state: any) => state.products.data);

  useEffect(() => {
    console.log("loaded");
    dispatch(fetchAllProducts());
  }, []);

  console.log("products", products);

  return (
    <>
      <Row style={styles.promotionHeaderRow}>
        <Col>
          <PromotionalHeader />
        </Col>
      </Row>
      <ScrollView>
        <Row style={styles.productItemRow}>
          <Col>
            {products
              .filter((_: any, index: number) => index % 2 !== 0)
              .map((productItem: any, index: number) => (
                <ProductListItemComponent
                  key={`${index}-prod-list-item`}
                  index={index}
                  product={productItem}
                />
              ))}
          </Col>
          <Col>
            {products
              .filter((_: any, index: number) => index % 2 === 0)
              .map((productItem: any, index: number) => (
                <ProductListItemComponent index={index} product={productItem} />
              ))}
          </Col>
        </Row>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  promotionHeaderRow: {flex: 0},
  productItemRow: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
  },
});
