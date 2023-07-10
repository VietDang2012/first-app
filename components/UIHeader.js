import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { colors, fontSizes } from '../constants'

function UIHeader(props) {
    return <View style={{
        height: 60,
        backgroundColor: colors.primary,
        justifyContent: 'center'
    }}>
        <Text style={{
            color: 'white',
            fontSize: fontSizes.h1,
            fontWeight: 'bold',
            alignSelf: 'center'
        }}>
            Settings
        </Text>
    </View>
}

export {
    UIHeader
}