import React from "react";
import { View, Text } from "react-native";

import styles from './styles';

export const PromotionalHeader = (props: { discountPercentage: number, promotionalText: string }) => {
    const { discountPercentage, promotionalText } = props;
    return (<>
        <View style={styles.discountContainer}>
            <Text style={styles.discountText}>{`${discountPercentage}% discount`}</Text>
        </View>
        <View style={styles.promotionalTextContainer}>
            <Text style={styles.promotionalText}>{`${promotionalText}`}</Text>
        </View>
    </>
    );
};