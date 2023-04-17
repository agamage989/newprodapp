import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, Image, ScrollView, StyleSheet, Text, ToastAndroid, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { Col, Row } from 'react-native-easy-grid';
import Counter from 'react-native-counters';
import { FlatList } from 'react-native-gesture-handler';
import { ReviewComponent } from '../components/reviewComponent';
import { ReviewHeaderComponent } from '../components/reviewHeaderComponent';
import { useSelector } from 'react-redux';

import LinearGradient from 'react-native-linear-gradient';

export const ProductDetails = (props: any) => {
  const { product } = props || {};
  const [imageSizes, setImageSize] = useState({});
  const [updatedAmount, setUpdatedAmount] = useState(product?.price);
  const reviews = useSelector((state: any) => state?.products?.reviews) || [];
  const locale = useSelector((state: any) => state.meta.locale);
  const width = Dimensions.get('window').width;
  const getImageSize = () => {
    Image.getSize(product.thumbnail, (_width, _height) => {
      setImageSize({
        width: width,
        height: _height * (width / _width),
      });
    });
  };

  useEffect(() => {
    getImageSize();
  }, []);

  return (
    <ScrollView style={styles.productColumn}>
      <View style={styles.productDetailContainer}>
        <Row style={styles.productImageRow}>
          <Image
            source={{ uri: product.thumbnail }}
            style={[styles.image, { ...imageSizes }]}
            resizeMode="cover"
          />
        </Row>
        <Row style={styles.productInfoRow}>
          <Col>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{product.title}</Text>
            </View>
            <View style={styles.categoryContainer}>
              <Text style={styles.category}>
                {`By ${product.brand}`.toUpperCase()}
              </Text>
            </View>
          </Col>
          <Col>
            <View style={styles.amountContainer}>
              <Text style={styles.amount}>{`$ ${product.price}`}</Text>
            </View>
          </Col>
        </Row>
        <Row style={styles.productInfoRow}>
          <Col>
            <Text>{product.description}</Text>
          </Col>
        </Row>
        <Row style={styles.productInfoRow}>
          <Col size={0.1}>
            <Text>{''}</Text>
          </Col>
          <Col size={0.9}>
            <Row>
              <Col style={styles.column}>
                <View>
                  <Text
                    style={styles.updatedAmountText}>{`$ ${updatedAmount}`}</Text>
                </View>
              </Col>
              <Col style={styles.column}>
                <View>
                  <Counter start={1} min={1} buttonStyle={{ borderColor: '#bbb' }} buttonTextStyle={{ color: '#bbb' }} countTextStyle={{ color: '#444' }} onChange={(number: any, type: any) => setUpdatedAmount(number * parseFloat(product.price))} />
                </View>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col style={styles.buttonRowContainer}>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => Alert.alert(locale.t("SUCCESFUL_PURCHASE"))}>
              <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                <Text style={styles.buttonText}>
                  {locale.t("BUY_IT_BUTTON")}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </Col>
        </Row>
        <Row style={styles.reviewsHeaderRow}>
          <Col>
            <ReviewHeaderComponent rating={product.rating} />
          </Col>
        </Row>
        <Row style={styles.reviewsInfoRow}>
          <FlatList
            data={reviews}
            renderItem={(data) => (<ReviewComponent review={data.item} />)}
          />
        </Row>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  column: { alignContent: 'flex-end', alignItems: 'flex-end' },
  productColumn: { flex: 1, flexDirection: 'column', backgroundColor: '#fff', marginTop: 40, paddingBottom: 50 },
  productDetailContainer: {
    flex: 1,
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    backgroundColor: '#fff'
  },
  productInfoRow: { flex: 0, padding: 5, paddingHorizontal: 10 },
  reviewsHeaderRow: { flex: 0, padding: 5, paddingHorizontal: 20 },
  reviewsInfoRow: { flex: 0, padding: 5, paddingHorizontal: 10, marginBottom: 20 },
  productContainer: {
    backgroundColor: '#fff',
  },
  productImageRow: {
    flex: 0,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 0,
  },
  categoryContainer: {
    flex: 0,
  },
  category: {
    flex: 0,
    color: '#00A36C',
    fontSize: 12,
  },
  titleContainer: {
    flex: 0,
  },
  title: {
    flex: 0,
    fontWeight: 'bold',
    fontSize: 20,
  },
  amountContainer: {
    flex: 0,
    alignItems: 'flex-end',
  },
  amount: {
    flex: 0,
    fontSize: 24,
    fontWeight: 'bold',
  },
  updatedAmountText: {
    fontSize: 30,
    fontWeight: 'bold',
    height: 32,
  },
  buttonRowContainer: { alignContent: 'center', alignItems: 'center' },
  buttonContainer: {
    width: '90%',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 50,
    marginVertical: 15,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
