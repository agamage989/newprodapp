import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

export const ProductAmount = (props: {amount: number; currency: string}) => (
  <>
    <View style={styles.amountRow}>
      <Text style={styles.amount}>{`${props.currency}${props.amount}`}</Text>
    </View>
  </>
);
