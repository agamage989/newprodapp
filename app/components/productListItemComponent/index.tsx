import React, {useEffect, useState} from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';
import {Col, Row} from 'react-native-easy-grid';
import {Actions} from 'react-native-router-flux';

export const ProductListItemComponent = (props: {
  index: number;
  product: {
    category: string;
    description: string;
    title: string;
    price: number;
    rating: number;
    stock: number;
    brand: string;
    thumbnail: string;
    images: string[];
    discountPercentage: number;
    amountCurrency: string;
  };
}) => {
  const {product, index} = props;
  const [imageSizes, setImageSize] = useState({});

  const width = Dimensions.get('window').width * 0.45;

  const getImageSize = () => {
    Image.getSize(product.thumbnail, (_width, _height) => {
      setImageSize({
        width: width,
        height: _height * (width / _width),
      });
    });
  };

  useEffect(() => {
    getImageSize();
  });

  return (
    <View style={styles.productCol}>
      <TouchableOpacity
        onPress={() => {
          if (Actions.currentScene !== 'productDetails') {
            Actions.push('productDetails', {product});
          }
        }}
        key={`${index}-product`}
        style={styles.productContainer}>
        <Row style={styles.productInfoRow} pointerEvents="none">
          <Image
            source={{uri: product.thumbnail}}
            style={[styles.image, {...imageSizes}]}
            resizeMode="cover"
          />
        </Row>
        <Row style={styles.productInfoRow} pointerEvents="none">
          <Col>
            <View style={styles.categoryContainer}>
              <Text style={styles.category}>
                {`By ${product.brand}`.toUpperCase()}
              </Text>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{product.title}</Text>
            </View>
            <View style={styles.amountContainer}>
              <Text style={styles.amount}>{`$${product.price}`}</Text>
            </View>
          </Col>
        </Row>
      </TouchableOpacity>
    </View>
  );
};
