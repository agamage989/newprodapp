import React, {useEffect, useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {Col, Row} from 'react-native-easy-grid';

export const ProductDetails = (props: any) => {
  const {product} = props || {};
  const [imageSizes, setImageSize] = useState({});
  // const [updatedAmount, setUpdatedAmount] = useState(product?.amount);
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
  });

  return (
    <>
      <View style={styles.productDetailContainer}>
        <Row style={styles.productImageRow}>
          <Image
            source={{uri: product.thumbnail}}
            style={[styles.image, {...imageSizes}]}
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
              <Text style={styles.amount}>{`$${product.price}`}</Text>
            </View>
          </Col>
        </Row>
        <Row style={styles.productInfoRow}>
          <Col>
            <Text>{product.description}</Text>
          </Col>
        </Row>
        <Row style={styles.productInfoRow}>
          <Col>
            <Text>{''}</Text>
          </Col>
          <Col>
            <Row>
              <Col style={{alignContent: 'flex-end', alignItems: 'flex-end'}}>
                <View>
                  <Text
                    style={{
                      fontSize: 30,
                      fontWeight: 'bold',
                      height: 32,
                    }}>{`$${product.price}`}</Text>
                </View>
              </Col>
              <Col style={{alignContent: 'flex-end', alignItems: 'flex-end'}}>
                <View>
                  <Text>{`$${product.price}`}</Text>
                </View>
              </Col>
            </Row>
          </Col>
        </Row>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  productDetailContainer: {
    flex: 0,
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
  },
  productInfoRow: {flex: 0, padding: 5, paddingHorizontal: 10},
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
});
