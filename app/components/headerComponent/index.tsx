import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native/types';

import styles from './styles';

export const HeaderComponent = (props: {
  title: string;
  rtlEnabled: boolean;
}) => {
  const {title, rtlEnabled = false} = props;

  return (
    <View style={[styles.headerTitleContainer]}>
      <View style={[styles.headerTitleContainer]}>
        <Text style={[styles.headerTitle]}>{title}</Text>
      </View>
      {rtlEnabled && (
        <View style={styles.rtlBtnActionContainer}>
          <TouchableOpacity style={styles.rtlButton} onPress={() => {}}>
            {'RTL'}
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
