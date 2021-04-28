import React from 'react';
import {  Text, StyleSheet } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ProductMenuProps extends RectButtonProps {
    title: string;
    active: boolean;
}

export function ProductMenu({ title, active = false, ...rest }: ProductMenuProps) {
    return (
        <RectButton 
            style={styles.container} 
            {...rest}
        >
            <Text style={[styles.title, active && styles.titleActive]}>
                {title}
            </Text>
        </RectButton>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 76,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginRight: 5
    },
    title: {
        fontFamily: fonts.text,
        fontSize: 16,
        color: '#897E7B',
        fontWeight: 'bold',
    },
    titleActive: {
        color: colors.title,
        fontFamily: fonts.heading
    }
})

