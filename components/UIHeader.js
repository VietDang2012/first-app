import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { colors, fontSizes } from '../constants'

function UIHeader(props) {
    const {tilte} = props
    return <View style={{
        height: 60,
        backgroundColor: colors.primary,
        justifyContent: 'center'
    }}>
        <Text style={{
            fontSize: fontSizes.h1,
            fontWeight: 'bold',
            color: 'white',
            alignSelf: 'center'
        }}>
            {tilte}
        </Text>
    </View>
}

export default UIHeader
