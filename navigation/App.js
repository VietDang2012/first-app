import React, { Component, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StackRouter } from 'react-navigation'
import { SafeAreaView, Text, View, Image, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import { Welcome, Login, Register } from '../screens'
import UItab from './UItab'

const Stack = createNativeStackNavigator()

function App(props) {
    return <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome' screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name={'Welcome'} component={Welcome}/>
            <Stack.Screen name={'Login'} component={Login}/>
            <Stack.Screen name={'Register'} component={Register}/>
            <Stack.Screen name={'UItab'} component={UItab}/>
        </Stack.Navigator>
    </NavigationContainer>
}

export default App