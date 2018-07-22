import React from 'react'
import {Text, TouchableOpacity, StyleSheet} from 'react-native'
import {purple, white, black} from '../utils/colors'

export default function CommonButton({children, onPress, style = {}}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={[styles.submit, style]}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    reset: {
        textAlign: 'center',
        color: purple,
    },
    submit: {
        backgroundColor: black,
        padding: 10,
        borderWidth: 1,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
        textAlign: 'center',
        color: white,
        fontWeight: 'bold'
    }
})