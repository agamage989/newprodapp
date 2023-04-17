import { createSlice } from '@reduxjs/toolkit';
import * as RNLocalize from "react-native-localize";

import i18n from '../../assets/locale';

const initialState = {
  isPromotionActive: true,
  title: 'DISCOUNT',
  subtitle: 'DISCOUNT_SUBTEXT',
  locale: i18n,
  langCode: i18n.locale
};

export const MetaReducer = createSlice({
  name: 'meta',
  initialState,
  reducers: {
    updateLocale: (state) => {
      if(!state.locale) {
        state.locale = i18n;
      }

      const currentLocale: any = ([...RNLocalize.getLocales()] || []).shift() || {};
      state.locale.locale = currentLocale?.languageTag || "en-US";
      state.langCode = state.locale.locale;
    }
  },
});

export const MetaReducerActions = MetaReducer.actions;

export default MetaReducer.reducer;
