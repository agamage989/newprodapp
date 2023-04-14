// import {fetch} from 'react-native-ssl-pinning';

export const productsAPI = async () => {
  return await fetch('https://dummyjson.com/products', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
