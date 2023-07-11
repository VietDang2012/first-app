import React, { Component, useState, useEffect } from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity, Alert } from 'react-native'
import { icons, images, colors, fontSizes } from '../constants'
import { UIButtons } from '../components';
// Component = Function

function Welcome(props) {
    const {navigation, route} = props
    const {navigate, goBack} = navigation
    const [accountTypes, setAccountTypes] = useState([
        {
            name: 'Individual',
            isSelected: false,
        },
        {
            name: 'Business',
            isSelected: false,
        },
        {
            name: 'Influencer',
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
                }}>Please seclect your account type</Text>
            </View>
            <View style={{
                flex: 30,
            }}>
                {accountTypes.map(accountType =>
                    <UIButtons
                    key={accountType.name}
                        onPress={() => {
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
                <UIButtons
                    onPress={
                        function() {
                            navigate('Login')
                        }
                    }
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
                        onPress={function() {
                            navigate('Register')
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