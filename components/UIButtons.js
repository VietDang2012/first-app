import React, { Component } from 'react'
import {TouchableOpacity, Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { colors } from '../constants'

function UIButtons(props) {
    const {onPress, tilte, isSelected} = props
    return <TouchableOpacity
        onPress={onPress}
        style={{
            borderColor: 'white',
            borderWidth: 1,
            borderRadius: 5,
            height: 45,
            marginHorizontal: 15,
            marginVertical: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: isSelected == true ? 'white' : null
        }}>
        {isSelected == true && <Icon
            size={20}
            name={"check"} style={{
                color: 'green',
                position: 'absolute',
                left: 20,
                top: 10,
            }} />}
        <Text style={{
            color: isSelected == true ? colors.primary : 'white',
            fontWeight: 'bold'
        }}>
            {tilte}
        </Text>
    </TouchableOpacity>
}

export {
    UIButtons
}