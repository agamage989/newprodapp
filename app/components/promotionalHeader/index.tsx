import React from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import { useSelector } from 'react-redux';
import { Col, Row } from 'react-native-easy-grid';

export const PromotionalHeader = () => {
  const meta = useSelector((state: any) => state.meta) || {};

  return meta.isPromotionActive ? (
    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[ '#ba68c8', '#8e24aa', '#4a148c']}>
      <Col style={styles.promotionalContainer}>
        <Row style={styles.discountContainer}>
          <Text style={styles.discountText}>{meta.locale.t(meta.title).replace("DISCOUNT_AMOUNT", '25%')}</Text>
        </Row>
        <Row style={styles.promotionalTextContainer}>
          <Text style={styles.promotionalText}>{meta.locale.t(meta.subtitle)}</Text>
        </Row>
      </Col>
    </LinearGradient>
  ) : null;
};
