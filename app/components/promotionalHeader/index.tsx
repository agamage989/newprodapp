import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';
import {useSelector} from 'react-redux';
import {Col, Row} from 'react-native-easy-grid';

export const PromotionalHeader = () => {
  const meta = useSelector((state: any) => state.meta) || {};

  return meta.isPromotionActive ? (
    <Col style={styles.promotionalContainer}>
      <Row style={styles.discountContainer}>
        <Text style={styles.discountText}>{meta.title}</Text>
      </Row>
      <Row style={styles.promotionalTextContainer}>
        <Text style={styles.promotionalText}>{meta.subtitle}</Text>
      </Row>
    </Col>
  ) : null;
};
