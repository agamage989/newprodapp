import React, { useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import { Actions } from 'react-native-router-flux';

import * as RNLocalize from "react-native-localize";

import { Actions as ReduxActions, store, useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';

export const ScreenHeader = (props: { title: string; colors: any, back: boolean }) => {
  const { title, colors, back } = props;
  const dispatch = useAppDispatch();

  const { locale, langCode } = useSelector((state: any) => ({ locale: state.meta?.locale, langCode: state.meta?.langCode }));

  useEffect(() => {
    dispatch(ReduxActions.updateLocale());
  }, [langCode]);

  useEffect(() => {
    RNLocalize.addEventListener('change', () => {
      dispatch(ReduxActions.updateLocale());
    });

    return () => RNLocalize.removeEventListener("change", () => { });
  });

  return (
    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={colors} style={styles.linearGradient}>
      {back && (<TouchableOpacity onPress={() => Actions.pop()} style={{ position: 'absolute', top: 0, left: 10 }}>
        <Text style={{ color: 'white', fontSize: 32 }}>{'<'}</Text>
      </TouchableOpacity>)}
      <Text style={styles.title}>{locale.t(title)}</Text>
    </LinearGradient>
  );
};
