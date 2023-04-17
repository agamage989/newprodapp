import React, { useEffect, useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Col, Row } from 'react-native-easy-grid';

import { DateTime } from 'luxon';

import { Rating } from 'react-native-ratings';

export const ReviewComponent = (props: any) => {
  const { review } = props || {};

  return (
    <>
      <View style={{
        width: '100%', padding: 10, flex: 0, alignContent: 'center', alignItems: 'center'
      }}>
        <View style={{
          width: '99%', padding: 10, flex: 0, alignContent: 'center', alignItems: 'center', shadowColor: 'black',
          shadowOpacity: 0.4,
          shadowOffset: { width: 1, height: 2 },
          shadowRadius: 20,
          elevation: 3,
          backgroundColor: 'white'
        }}>
          <Row style={{marginVertical: 5}}>
            <Col style={{ alignContent: 'flex-start', alignItems: 'flex-start', alignSelf: 'flex-end' }}>
              <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{review.title}</Text>
            </Col>
            <Col size={0.35} style={{ alignContent: 'flex-end', alignItems: 'flex-end', alignSelf: 'flex-end' }}>
              <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{review.customerName}</Text>
            </Col>
          </Row>
          <Row style={{marginVertical: 5}}>
            <Col style={{ alignContent: 'flex-start', alignItems: 'flex-start', alignSelf: 'flex-end' }}>
              <Rating imageSize={15} readonly startingValue={review.rate || 4} />
            </Col>
            <Col size={0.35} style={{ alignContent: 'flex-end', alignItems: 'flex-end', alignSelf: 'flex-end' }}>
              <Text style={{ fontSize: 12 }}>{DateTime.fromMillis(review.date).toFormat('LLL dd, yyyy')}</Text>
            </Col>
          </Row>
          <Row style={{marginVertical: 5}}>
            <Col><Text>{review.comment}</Text></Col>
          </Row>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
});
