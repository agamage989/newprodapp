import React from 'react';
import {Image, Text, View} from 'react-native/types';

import styles from './styles';

export const ProductListItemComponent = (props: {
  product: {
    image: string;
    category: string;
    title: string;
    amount: number;
    amountCurrency: string;
  };
}) => {
  const {product} = props;

  return (
    <>
      <View style={styles.imageContainer}>
        <Image source={{uri: product.image}} style={styles.image} />
      </View>
      <View style={styles.categoryContainer}>
        <Text style={styles.category}>{product.category}</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{product.title}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amount}>
          {product.amountCurrency}
          {product.amount}
        </Text>
      </View>
    </>
  );
};
