import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

import BagsImage from '../assets/bags.png';
import MenuImage from '../assets/menu.png';
import LoupeImage from '../assets/loupe.png';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View>
                    <Text style={styles.welcome}>Seja Bem-vindo</Text>
                    <Text style={styles.title}>Pizzaria do Fullano 🍕</Text>
                </View>

                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.7}
                >
                    <Image source={BagsImage} style={styles.image} />
                </TouchableOpacity>
            </View>

            <View style={styles.setting}>
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.7}
                >
                    <Image source={MenuImage} style={styles.image} />
                </TouchableOpacity>

                
                <View style={styles.search}>
                    <Image source={LoupeImage} style={styles.loupeImage} />

                    <TextInput 
                        style={styles.searchInput}
                        placeholder="Busque produtos..."
                    
                    >
                    
                    </TextInput>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white
    },
    content: {
        flexDirection: 'row',
        paddingTop: 40,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    welcome: {
        fontFamily: fonts.text,
        fontSize: 18,
        color: colors.heading,
        fontWeight: 'bold'
    },
    title: {
        fontFamily: fonts.text,
        color: colors.black,
        fontSize: 24,
        fontWeight: 'bold'
    },
    button: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: colors.white
    },
    image: {
        width: 40,
        height: 40,  
    },
    setting: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingHorizontal: 10
    },
    search: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        width: 300,
        height: 50,
        borderRadius: 50,
        backgroundColor: colors.white
    },
    loupeImage: {
        width: 30,
        height: 30, 
        marginLeft: 8
    },
    searchInput: {
        width: '80%'
    }
})