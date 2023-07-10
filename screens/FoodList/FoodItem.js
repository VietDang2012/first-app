import React, { Component, useState, useEffect } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Text, View, Image, ImageBackground, TouchableOpacity, Alert, TextInput, KeyboardAvoidingView, Keyboard } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { icons, images, colors, fontSizes } from '../../constants'
import Icon from 'react-native-vector-icons/FontAwesome'

function _getColorFromStatus(status) {
    return status.toLowerCase().trim() == 'opening now' ? colors.succes :
        (status.toLowerCase().trim() == 'coming soon' ? colors.warning :
            (status.toLowerCase().trim() == 'closing soon' ? colors.alert : colors.succes))
}
function FoodItem(props) {
    let { name, url, status, price, website, socialNetwork } = props.food
    const { onPress } = props
    return (<TouchableOpacity
        onPress={onPress}
        style={{
            height: 160,
            paddingTop: 20,
            paddingStart: 10,
            flexDirection: 'row'
        }}>
        <Image
            source={{
                uri: url
            }}
            style={{
                height: 120,
                width: 120,
                borderRadius: 10,
                marginRight: 15,
                resizeMode: 'cover'
            }} />
        <View style={{
            flex: 1,
            marginRight: 10,
        }}>
            <Text style={{
                color: 'black',
                fontSize: fontSizes.h4,
                fontWeight: 'bold'
            }}>{name}</Text>
            <Text style={{
                height: 1,
                backgroundColor: 'black',
            }} />
            <View style={{
                flexDirection: 'row'
            }}>
                <Text style={{
                    color: colors.inactive,
                    fontSize: fontSizes.h5
                }}>Status: </Text>
                <Text style={{
                    color: _getColorFromStatus(status),
                    fontSize: fontSizes.h5,
                    fontWeight: 'bold'
                }}>{status.toUpperCase()}</Text>
            </View>
            <Text style={{
                color: colors.inactive,
                fontSize: fontSizes.h5
            }}>Price: {price} $</Text>
            <Text style={{
                color: colors.inactive,
                fontSize: fontSizes.h5
            }}>Website: {website}</Text>
            <View style={{
                flexDirection: 'row'
            }}>
                {socialNetwork['facebook'] != undefined && <Icon
                    name='facebook'
                    size={20}
                    color={colors.inactive}
                    padding={5} />}
                {socialNetwork['instagram'] != undefined && <Icon
                    name='instagram'
                    size={20}
                    color={colors.inactive}
                    padding={5} />}
                {socialNetwork['twitter'] != undefined && <Icon
                    name='twitter'
                    size={20}
                    color={colors.inactive}
                    padding={5} />}
            </View>
        </View>
    </TouchableOpacity>)
}

export default FoodItem