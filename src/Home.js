import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

import { Header } from './components/Header';

import Pizza from './assets/pizza.png';
import Arrow from './assets/arrow.png';


import colors from './styles/colors';
import fonts from './styles/fonts';
import { ProductMenu } from './components/ProductsMenu';
import { ProductCard } from './components/ProductCard';


export function Home() {
    return (
        <View style={styles.container}>
            <Header />

            <TouchableOpacity
                style={styles.promotion}
                activeOpacity={0.7}
            >
                <Text style={styles.text}>
                    Promoção Relâmpago
                </Text>

                <Text style={styles.textPercent}>
                    10% OFF
                </Text>

                <Image source={Arrow} style={styles.arrowImage}/>
            </TouchableOpacity>

            <View>
                <FlatList
                    data={[1, 2, 3, 4]}
                    renderItem={() => (
                       <Image 
                            source={Pizza} 
                            style={styles.productimage} 
                            elevation={5}    
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.horizontalList}
                />
            </View>

            <Text style={styles.textProduct}>
                Nossos Produtos
            </Text>

            <View>
                <FlatList
                    data={[1, 2, 3, 4, 5, 6, 7, 8]}
                    renderItem={() => (
                        <ProductMenu 
                            title="Todos"
                            style={styles.menuList} 
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.horizontalList}
                />
            </View>

            <View>
                <FlatList
                    data={[1, 2, 3]}
                    renderItem={() => (
                        <ProductCard /> 
                    )}
                    showsHorizontalScrollIndicator={false}
                    style={styles.horizontalList}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    promotion: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginHorizontal: 20,
        height: 60,
        borderRadius: 50

    },
    text: {
        fontFamily: fonts.text,
        fontSize: 19,
        color: colors.heading,
        fontWeight: 'bold'
    },
    textPercent:{
        backgroundColor: 'red',
        height:'75%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        color: colors.white,
        fontWeight: 'bold',
        fontFamily: fonts.text,
        fontSize: 18,
        paddingHorizontal: 10,
        paddingTop: 10
    },
    arrowImage: {
        width: 10,
        height: 10,
        color: 'red'
    },
    horizontalList:{
        paddingLeft: 10
    },
    productimage: {
        width: 180,
        height:100,
        borderRadius:20,
        marginRight: 5,
        marginTop: 20,
        shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    },
    textProduct:{
        fontFamily: fonts.text,
        fontSize: 21,
        color: colors.title,
        fontWeight: 'bold',
        paddingLeft: 20,
        paddingTop: 20
    },
    menuList: {
        marginTop: 20,
        marginLeft: 15,
    }
})