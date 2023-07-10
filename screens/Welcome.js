import React, { Component, useState, useEffect } from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity, Alert } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { sum2Number, substract2Number, Pi } from '../utilies/Caculation'
import { icons, images, colors, fontSizes } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome'
import { UIbuttons } from '../components/UIButtons'
// Component = Function

function Welcome(props) {
    const [accountTypes, setAccountTypes] = useState([
        {
            name: 'Big Butts',
            isSelected: false,
        },
        {
            name: 'Big Hole',
            isSelected: false,
        },
        {
            name: 'Stinky Ass',
            isSelected: false,
        },
    ])
    return <View style={{
        backgroundColor: 'white',
        flex: 100,
    }}>
        <ImageBackground
            source={
                images.welcome_background
            }
            resizeMode='cover'
            style={{
                flex: 100,
            }}
        >
            <View style={{
                flex: 20,
            }}>
                <View style={{
                    flexDirection: 'row',
                    height: 50,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}>
                    <Image
                        source={
                            icons.cloud
                        }
                        style={{
                            width: 30,
                            height: 30,
                            marginHorizontal: 10,
                        }}></Image>
                    <Text style={{
                        color: 'white',
                        fontSize: fontSizes.h3,
                    }}>KISS MY ASS</Text>
                    <View style={{ flex: 1 }} />
                    <TouchableOpacity>
                        <Image
                            source={
                                icons.question
                            }
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: 'white',
                                marginEnd: 10,
                            }}></Image>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                flex: 10,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{
                    marginBottom: 5,
                    color: 'white',
                    fontSize: fontSizes.h5,
                }}>Welcome to</Text>
                <Text style={{
                    marginBottom: 5,
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: fontSizes.h3,
                }}>KISS MY ASS</Text>
                <Text style={{
                    marginBottom: 5,
                    color: 'white',
                    fontSize: fontSizes.h5,
                }}>Please seclect your ass type</Text>
            </View>
            <View style={{
                flex: 30,
            }}>
                {accountTypes.map(accountType =>
                    <UIbuttons onPress={() => {
                        setAccountTypes(accountTypes.map(eachAccountType => {
                            return {
                                ...eachAccountType,
                                isSelected: eachAccountType.name == accountType.name
                            }
                        }))
                    }}
                        tilte={accountType.name}
                        isSelected={accountType.isSelected}
                    />)
                }
            </View>
            <View style={{
                flex: 20,
            }}>
                <UIbuttons
                    key={accountTypes.name}
                    tilte={'login'.toUpperCase()} />
                <View style={{
                    flexDirection: 'row',
                    alignSelf: 'center'
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: fontSizes.h5,
                    }}>
                        Doesn't have an account ?
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            Alert.alert('Đmm')
                        }}>
                        <Text style={{
                            color: 'lightblue',
                            fontSize: fontSizes.h5,
                            marginStart: 10,
                            textDecorationLine: 'underline'
                        }}>
                            Register
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    </View>
}

export default Welcome