import React, { Component, useState, useEffect } from 'react'
import { Text, View, Image, ImageBackground, TouchableOpacity, Alert, TextInput, KeyboardAvoidingView, Keyboard } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { icons, images, colors, fontSizes } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome'

function LoginFake(props) {
    const[keyboardIsShown, setkeyboardIsShown] = useState(false)
    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', () => {
            setkeyboardIsShown(true)
        })
        Keyboard.addListener('keyboardDidHide', () => {
            setkeyboardIsShown(false)
        })
    })
    return <KeyboardAvoidingView
    style={{
        flex: 100,
    }}>
        <ImageBackground
            source={
                images.login_background
            }
            resizeMode='cover'
            style={{
                flex: 100,
            }}
        >
            <View style={{
                flex: 30,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
            }}>
                <Text style={{
                    fontSize: fontSizes.h1,
                    color: colors.primary,
                    fontWeight: 'bold',
                    width: '50%',
                }}>
                    Already have an account ?
                </Text>
                <Image
                    tintColor={colors.primary}
                    source={
                        images.ryan
                    } style={{
                        height: 120,
                        width: 120,
                        alignSelf: 'center',
                    }} />
            </View>
            <View style={{
                flex: 25
            }}>
                <View style={{
                    marginHorizontal: 15,
                }}>
                    <Text style={{
                        color: colors.primary,
                        fontSize: fontSizes.h4,
                        fontWeight: 'bold',
                    }}> Email:</Text>
                    <TextInput
                        style={{
                            color: 'black',
                        }}
                        placeholder='example@gmail.com'
                        placeholderTextColor={colors.placeholder}
                    />
                    <View style={{
                        height: 1,
                        backgroundColor: colors.primary,
                        width: '100%',
                        marginBottom: 10,
                        alignSelf: 'center'
                    }}/>
                </View>
                <View style={{
                    marginHorizontal: 15,
                }}>
                    <Text style={{
                        color: colors.primary,
                        fontSize: fontSizes.h4,
                        fontWeight: 'bold',
                    }}> Password:</Text>
                    <TextInput
                        style={{
                            color: 'black',
                        }}
                        secureTextEntry={true}
                        placeholder='Enter your password'
                        placeholderTextColor={colors.placeholder}
                    />
                    <View style={{
                        height: 1,
                        backgroundColor: colors.primary,
                        width: '100%',
                        marginBottom: 10,
                        alignSelf: 'center'
                    }}/>
                </View>
            </View>
            {keyboardIsShown == false && <View style={{
                flex: 15
            }}>
                <TouchableOpacity
                    onPress={() => {
                        Alert.alert('Hello Baby')
                    }}
                    style={{
                        backgroundColor: colors.primary,
                        justifyContent: 'center',
                        alignItems: "center",
                        alignSelf: 'center',
                        width: '50%',
                        borderRadius: 20
                    }}>
                    <Text style={{
                        padding: 10,
                        fontSize: fontSizes.h4,
                        color: 'white',
                        fontWeight: 'bold'
                    }}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        Alert.alert('Hello Baby')
                    }}
                    style={{
                        padding: 5
                    }}>
                    <Text style={{
                        padding: 8,
                        fontSize: fontSizes.h5,
                        color: 'gray',
                        alignSelf: 'center',
                        textDecorationLine: 'underline'
                    }}>New user ? Register now</Text>
                </TouchableOpacity>
            </View>}
            {keyboardIsShown == false && <View style={{
                flex: 20
            }}>
                <View style={{
                    height: 40,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginHorizontal: 40
                }}>
                    <View style={{height: 1,backgroundColor: 'black', flex: 1}}/>
                    <Text style={{
                        color: 'black',
                        fontSize: fontSizes.h5,
                        fontWeight: 'bold',
                        marginHorizontal: 5
                    }}>Use other methods</Text>
                    <View style={{height: 1,backgroundColor: 'black', flex: 1}}/>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity>
                        <Icon name='facebook' size={40} color={colors.facebook} padding={10} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name='google' size={40} color={colors.google} padding={10} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name='instagram' size={40} color={colors.instargram} padding={10} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name='twitter' size={40} color={colors.twitter} padding={10} />
                    </TouchableOpacity>
                </View>
            </View>}
        </ImageBackground>
    </KeyboardAvoidingView>
}

export default LoginFake