import React, { useState, useEffect } from 'react'
import { Text, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Keyboard } from 'react-native'
import { icons, images, colors, fontSizes } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { isValidEmail, isValidPassword } from '../utilies/Validation'

function Login(props) {
    const { navigation, route } = props
    const { navigate, goBack } = navigation
    const [keyboardIsShown, setkeyboardIsShown] = useState(false)
    // states for validating
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    // state to store email/ password
    // Email is variable and setEmail is a function
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const isValidationOK = () => email.length > 0 && password.length > 0
        && isValidEmail(email) == true && isValidPassword(password) == true
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
        <TouchableOpacity>
            <Icon
                onPress={
                    function () {
                        navigate('Welcome')
                    }
                }
                name='arrow-left'
                size={30}
                color={colors.primary}
                padding={20} />
        </TouchableOpacity>
        <View style={{
            flex: 25,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
        }}>
            <Text style={{
                fontSize: fontSizes.h1,
                color: colors.primary,
                fontWeight: 'bold',
                width: '50%',
                textShadowRadius: 30,
            }}>
                Already have an account ?
            </Text>
            <Image
                source={
                    images.account
                } style={{
                    tintColor: colors.primary,
                    height: 120,
                    width: 120,
                    alignSelf: 'center',
                }} />
        </View>
        <View style={{
            flex: 40,
            paddingTop: 60
        }}>
            <View style={{
                marginHorizontal: 15,
            }}>
                <Text style={{
                    color: colors.primary,
                    fontSize: fontSizes.h4,
                    fontWeight: 'bold',
                    textShadowRadius: 30,
                }}> Email:</Text>
                <TextInput
                    onChangeText={(text) => {
                        setErrorEmail(isValidEmail(text) == true ?
                            '' : 'Email is invalid'),
                            setEmail(text)
                        // The onChange function will update the text when you change it
                        // Then the setEmail function will change the email variable
                    }}
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
                    alignSelf: 'center'
                }} />
                <Text style={{
                    color: 'red',
                    fontSize: fontSizes.h6,
                    marginVertical: 5
                }}>
                    {errorEmail}
                </Text>
            </View>
            <View style={{
                marginHorizontal: 15,
            }}>
                <Text style={{
                    color: colors.primary,
                    fontSize: fontSizes.h4,
                    fontWeight: 'bold',
                    textShadowRadius: 30,
                }}> Password:</Text>
                <TextInput
                    onChangeText={(text) => {
                        setErrorPassword(isValidPassword(text) == true ?
                            '' : 'Password is invalid'),
                            setPassword(text)
                    }}
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
                    alignSelf: 'center'
                }} />
                <Text style={{
                    color: 'red',
                    fontSize: fontSizes.h6,
                    marginVertical: 10
                }}>
                    {errorPassword}
                </Text>
            </View>
        </View>
        {keyboardIsShown == false && <View style={{
            flex: 15
        }}>
            <TouchableOpacity
                disabled={isValidationOK() == false}
                onPress={() => {
                    navigate('UItab')
                }}
                style={{
                    backgroundColor: isValidationOK() == true ?
                        colors.primary : colors.inactive,
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
                    navigate('Register')
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
                <View style={{ height: 1, backgroundColor: 'black', flex: 1 }} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h5,
                    fontWeight: 'bold',
                    marginHorizontal: 5
                }}>Use other methods</Text>
                <View style={{ height: 1, backgroundColor: 'black', flex: 1 }} />
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
    </KeyboardAvoidingView>
}

export default Login