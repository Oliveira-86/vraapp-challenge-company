import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

import Pizza from '../assets/pizza.png';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function ProductCard() {
    return (
        <View  style={styles.container}>
            <View style={styles.content}>

                <Image source={Pizza} style={styles.imageProduct} />

                <View style={styles.text}>
                    <Text style={styles.title}>
                        Pizza Grande
                    </Text>

                    <Text style={styles.subtitle}>
                        Pizza com massa tradicional {'\n'}
                        do jeito que todo mundo{'\n'}
                        gosta

                    </Text>
                </View>

                <View style={styles.priceContainer}>
                    <Text style={styles.price}>
                        R$ 39,90
                    </Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%'

    },
    imageProduct: {
        width: 80,
        height: 80,
        borderRadius: 15,
        marginLeft: 5
    },
    text: {
        paddingHorizontal: 10
    },
    title: {
        fontFamily: fonts.text,
        fontWeight: 'bold',
        fontSize: 17,
    },
    subtitle: {
        fontFamily: fonts.text,
        color: colors.heading,
    },
    price: {
        fontFamily: fonts.text,
        color: colors.title,
        fontWeight: 'bold',
        fontSize: 17,
        paddingLeft: 5,
        paddingBottom: 50
    },
})