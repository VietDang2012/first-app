import React, { useState, useEffect } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet, ImageBackground, Keyboard, SafeAreaView, Platform, ScrollView } from 'react-native'
import { icons, images, colors, fontSizes } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { user as UserRepository } from '../repositories'

function Profile(props) {
    const [user, setUser] = useState({})

    useEffect(() => {
        UserRepository.getUserDetail().then(responseUser => setUser(responseUser))
    }, [])
    const { email, url, username, dateOfBirth, gender, useId, address, phone, reagisteredDate } = user
    return <SafeAreaView style={{
        flex: 1,
        paddingTop: Platform === 'ios' ? 40 : 0
    }}>
        <ScrollView>
            <View>
                <ImageBackground
                    source={
                        images.profile_background
                    }
                    resizeMode='cover'
                    style={{
                        flex: 100,
                    }}>
                    <Image
                        source={{
                            uri: url
                        }}
                        style={{
                            height: 200,
                            width: 200,
                            borderRadius: 100,
                            resizeMode: 'cover',
                            alignSelf: 'center',
                            marginVertical: '5%'
                        }} />
                    <View style={{
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            marginBottom: 20,
                            fontSize: fontSizes.h1,
                            color: 'white',
                            fontWeight: 'bold'
                        }}>{username}</Text>
                        <View style={{
                            flexDirection: 'row'
                        }}>
                            <Icon
                                color={'white'}
                                marginEnd={20}
                                size={20}
                                name='building' />
                            <Text style={{
                                marginBottom: 20,
                                fontSize: fontSizes.h4,
                                color: 'white'
                            }}>{address}</Text>
                        </View>
                    </View>
                    <View style={{
                        backgroundColor: colors.primary,
                        opacity: 0.8,
                        marginBottom: 40,
                        padding: 40,
                    }}>
                        <Text style={styles.description}>{'Username:'} {username}</Text>
                        <Text style={styles.description}>{'Email:'} {email}</Text>
                        <Text style={styles.description}>{'Address:'} {address}</Text>
                        <Text style={styles.description}>{'Gender:'} {gender}</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        paddingBottom: 40,
                    }}>
                        <TouchableOpacity>
                            <View style={styles.button}>
                                <Text style={styles.description}>DATE</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.button}>
                                <Text style={styles.description}>IGNORE</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>

        </ScrollView>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    description: {
        color: 'black',
        fontSize: fontSizes.h4,
        paddingVertical: 10
    },
    button: {
        backgroundColor: colors.primary,
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 15,
        opacity: 0.8
    }
});

export default Profile