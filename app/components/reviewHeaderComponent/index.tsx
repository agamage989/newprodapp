import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Col, Row } from 'react-native-easy-grid';

import { Rating } from 'react-native-ratings';
import { useSelector } from 'react-redux';

export const ReviewHeaderComponent = (props: any) => {
  const { rating } = props || {};
  const locale = useSelector((state: any) => state.meta.locale);

  return (
    <>
      <View>
        <Row style={{ width: '100%', flex: 0, alignContent: 'center', alignItems: 'center', marginTop: 10 , marginBottom: 10}}>
          <Col size={0.2} style={{ alignContent: 'flex-start', alignItems: 'flex-start', alignSelf: 'flex-end' }}>
            <Text style={{ fontSize: 32, fontWeight: 'bold' }}>{Math.abs(parseFloat(rating)).toFixed(1)}</Text>
          </Col>
          <Col style={{ alignContent: 'flex-start', alignItems: 'flex-start', alignSelf: 'flex-end' }}>
            <Rating imageSize={20} readonly startingValue={rating || 4} ratingBackgroundColor='red' />
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{locale.t("REVIEWS_SUBTEXT")}</Text>
          </Col>
        </Row>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
});
