import React, { Component, useState, useEffect } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Text, View, Image, ImageBackground, TouchableOpacity, Alert, TextInput, KeyboardAvoidingView, Keyboard, ScrollView, FlatList } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { icons, images, colors, fontSizes } from '../constants'
import { UIHeader } from '../components/UIHeader'

function Settings(props) {
    return <View style={{
        flex: 1
    }}>
        <UIHeader/>
    </View>
}

export default Settings