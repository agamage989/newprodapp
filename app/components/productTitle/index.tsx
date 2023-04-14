import React from 'react';
import {Text} from 'react-native';
import {Row} from 'react-native-easy-grid';

import styles from './styles';

export const ProductTitle = (props: {title: string; category: string}) => (
  <>
    <Row>
      <Text style={styles.category}>{`${props.category}`}</Text>
    </Row>
    <Row>
      <Text style={styles.title}>{`${props.title}`}</Text>
    </Row>
  </>
);
