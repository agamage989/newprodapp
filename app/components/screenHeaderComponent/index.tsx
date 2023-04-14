import React from 'react';
import {Text} from 'react-native';

import styles from './styles';
import {Col, Row} from 'react-native-easy-grid';

export const ScreenHeader = (props: {title: string}) => {
  const {title} = props;
  return (
    <Col>
      <Row style={styles.headerRow}>
        <Col>
          <Text style={styles.title}>{title}</Text>
        </Col>
      </Row>
    </Col>
  );
};
