import React, { useState, useEffect } from 'react'
import { Text, View, Image, FlatList, TouchableOpacity, TextInput, Alert, StyleSheet } from 'react-native'
import { colors, fontSizes } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { SafeAreaView } from 'react-native-safe-area-context'

function Photo(props) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState([])
    const [searchText, setSearchText] = useState('')
    const url = 'https://jsonplaceholder.typicode.com/photos'

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => setData(json.slice(0, 10)))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    }, [])

    return <SafeAreaView style={{
        flex: 1,
        marginBottom: 50
    }}>
        <View style={{
            backgroundColor: colors.primary
        }}>
            <View style={{
                flexDirection: 'row',
                margin: 10,
                alignItems: 'center',
            }}>
                <Icon name='search'
                    style={{
                        position: 'absolute',
                        padding: 10
                    }}
                    size={20}
                    color={colors.inactive}
                />
                <TextInput
                    onChangeText={(text) => { setSearchText(text) }}
                    placeholder='Search'
                    autoCorrect={false}
                    style={{
                        flex: 1,
                        marginEnd: 10,
                        backgroundColor: colors.inactive,
                        height: 40,
                        borderRadius: 5,
                        opacity: 0.4,
                        paddingStart: 40,
                        borderWidth: 1,
                    }}>
                </TextInput>
                <Icon name='bars'
                    size={30}
                    color={'black'}
                />
            </View>
        </View>
        <View>
            {
                loading ? (<Text>Loading...</Text>) : (data.map((photo) => (
                    <FlatList
                        key={data.name}
                        data={data}
                        keyExtractor={item => item.url}
                        renderItem={({ item }) => {
                            return <TouchableOpacity>
                                <View style={{
                                    flexDirection: 'row'
                                }}>
                                    <Image
                                        source={{
                                            uri: item.url
                                        }}
                                        style={{
                                            height: 100,
                                            width: 100,
                                            borderRadius: 10,
                                            resizeMode: 'cover',
                                            margin: 10,
                                        }} />
                                    <View style={{
                                        width: 240,
                                        paddingTop: 10,
                                        paddingStart: 10
                                    }}>
                                        <Text style={{
                                            color: 'black',
                                            fontSize: fontSizes.h6,
                                            fontWeight: 'bold'
                                        }}>
                                            {item.title.toUpperCase()}
                                        </Text>
                                        <Text>ID: {item.id}</Text>
                                        <Text>From album: {item.albumId}</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 1, backgroundColor: 'black', height: 5 }}></View>
                            </TouchableOpacity>
                        }}
                    />
                )))
            }
        </View>
    </SafeAreaView>
}

export default Photo