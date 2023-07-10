import React, { Component, useState, useEffect } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Text, View, Image, ImageBackground, TouchableOpacity, Alert, TextInput, KeyboardAvoidingView, Keyboard, ScrollView, FlatList } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { icons, images, colors, fontSizes } from '../../constants'
import Icon from 'react-native-vector-icons/FontAwesome'
import { isValidEmail, isValidPassword } from '../../utilies/Validation'
import FoodItem from './FoodItem'

function FakeFoodList(props) {
    const [foods, setFoods] = useState([
        {
            name: 'Pho',
            url: 'https://c4.ttcache.com/thumbnail/JhyDxJIoaFG/288x162/1280x720.216.jpg',
            status: 'Opening now',
            price: 200,
            website: 'https://edition.cnn.com/',
            socialNetwork: {
                instagram: 'instagram',
            }
        },
        {
            name: 'Cha ca',
            url: 'https://cdn77-pic.xvideos-cdn.com/videos/thumbs169poster/ed/27/c6/ed27c6a7e63e08815e3c03d96b93f4c2/ed27c6a7e63e08815e3c03d96b93f4c2.1.jpg',
            status: 'Opening now',
            price: 200,
            website: 'https://edition.cnn.com/',
            socialNetwork: {
                facebook: 'facebook.com',
            }
        },
        {
            name: 'Ga ran',
            url: 'https://trahkino.cc/contents/videos_screenshots/81000/81299/preview.mp4.jpg',
            status: 'Closing soon',
            price: 200,
            website: 'https://edition.cnn.com/',
            socialNetwork: {
                twitter: 'twitter.com'
            }
        },
        {
            name: 'Bun rieu',
            url: 'https://ddeva.info/uploads/posts/2023-01/thumbs/1672682573_1-ddeva-info-p-porn-tatzumaki-cosplay-2.jpg',
            status: 'Opening now',
            price: 200,
            website: 'https://edition.cnn.com/',
            socialNetwork: {
                facebook: 'facebook.com',
                twitter: 'twitter.com'
            }
        },
        {
            name: 'Cave',
            url: 'https://cdn77-pic.xvideos-cdn.com/videos/thumbs169poster/8b/7d/ed/8b7ded0472c83b90e0dccd3e5f672d1e/8b7ded0472c83b90e0dccd3e5f672d1e.25.jpg',
            status: 'Closing soon',
            price: 200,
            website: 'https://edition.cnn.com/',
            socialNetwork: {
                facebook: 'facebook.com',
                instagram: 'instagram',
                twitter: 'twitter.com'
            }
        },
        {
            name: 'OMG',
            url: 'https://m.hentai-for.net/uploads/posts/2022-05/1652207865_1652184799_screen_1652057783537-1.jpg',
            status: 'Closing soon',
            price: 200,
            website: 'https://edition.cnn.com/',
            socialNetwork: {
                instagram: 'instagram',
                twitter: 'twitter.com'
            }
        },
        {
            name: 'Hello',
            url: 'https://img-cf.xvideos-cdn.com/videos/thumbs169ll/60/aa/b5/60aab587676ef4d405ff3ba8988a29ca-1/60aab587676ef4d405ff3ba8988a29ca.16.jpg',
            status: 'Opening now',
            price: 200,
            website: 'https://edition.cnn.com/',
            socialNetwork: {
                facebook: 'facebook.com',
                twitter: 'twitter.com'
            }
        },
        {
            name: 'Alo',
            url: 'https://ei.phncdn.com/videos/202105/20/388313691/original/(m=eaAaGwObaaaa)(mh=5MCKskwS6RnKzC-N)16.jpg',
            status: 'Closing soon',
            price: 200,
            website: 'https://edition.cnn.com/',
            socialNetwork: {
                twitter: 'twitter.com'
            }
        },
        {
            name: 'Adu',
            url: 'https://sfmcompile.club/wp-content/uploads/2021/11/Robot-Ash-fucking-at-the-beach.jpg',
            status: 'Coming soon',
            price: 200,
            website: 'https://edition.cnn.com/',
            socialNetwork: {
                facebook: 'facebook.com'
            }
        },
    ])

    const [categories, setCategories] = useState([
        {
            name: 'BBQ',
            url: 'https://cdn.tgdd.vn/2021/03/CookProduct/Bbq-la-gi-nguon-goc-va-cac-cach-tu-lam-bbq-tai-nha-vo-cung-don-gian-0-1200x676.jpg'
        },
        {
            name: 'Drinks',
            url: 'https://thegirlonbloor.com/wp-content/uploads/2021/07/Summer-Drinks-14-500x375.jpg'
        },
        {
            name: 'Dessert',
            url: 'https://img.taste.com.au/pLPG_hJV/taste/2021/05/lemon-dream-dessert-more-must-see-videos-171595-2.jpg'
        },
        {
            name: 'Chickens',
            url: 'https://www.allrecipes.com/thmb/AtViolcfVtInHgq_mRtv4tPZASQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-187822-baked-chicken-wings-4x3-5c7b4624c8554f3da5aabb7d3a91a209.jpg'
        },
        {
            name: 'Pizza',
            url: 'https://www.allrecipes.com/thmb/0xH8n2D4cC97t7mcC7eT2SDZ0aE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6776_Pizza-Dough_ddmfs_2x1_1725-fdaa76496da045b3bdaadcec6d4c5398.jpg'
        },
        {
            name: 'Rice',
            url: 'https://theviewfromgreatisland.com/wp-content/uploads/2020/04/korean-beef-rice-bowl-8506495-April-24-2020.jpg'
        },
        {
            name: 'Seafood',
            url: 'https://www.licious.in/blog/wp-content/uploads/2022/02/shutterstock_1773695441-min.jpg'
        },
    ])

    const filteredFoods = () =>
        foods.filter(eachFood =>
            eachFood.name.toLowerCase().includes(searchText.toLowerCase())
        )

    const [searchText, setSearchText] = useState('')

    return <View style={{
        flex: 1
    }}>
        <View>
            <View style={{
                flexDirection: 'row',
                margin: 10,
                alignItems: 'center'
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
                        borderWidth: 1
                    }}>
                </TextInput>
                <Icon name='bars'
                    size={30}
                    color={'black'}
                />
            </View>
            <View style={{
                height: 100,
            }}>
                <View style={{ height: 1, backgroundColor: colors.inactive }} />
                <FlatList
                    horizontal={true}
                    data={categories}
                    keyExtractor={item => item.name}
                    style={{ flex: 1 }}
                    renderItem={({ item }) => {
                        return <TouchableOpacity
                            onPress={function () {
                                Alert.alert('You\'re pressed on', item.name)
                            }}
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <Image
                                source={{
                                    uri: item.url
                                }}
                                style={{
                                    height: 50,
                                    width: 50,
                                    borderRadius: 25,
                                    resizeMode: 'cover',
                                    margin: 10,
                                }} />
                            <Text style={{
                                color: 'black',
                                fontSize: fontSizes.h6,
                                fontWeight: 'bold'
                            }}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    }}>
                </FlatList>
                <View style={{ height: 1, backgroundColor: colors.inactive }} />
            </View>
        </View>
        {filteredFoods().length > 0 ? <FlatList
            data={filteredFoods()}
            renderItem={({ item }) => <FoodItem
                onPress={function () {
                    Alert.alert(item.name, 'Is your dish')
                }}
                food={item} />}
            keyExtractor={eachFood => eachFood.name}
        /> : <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{
                color: colors.inactive,
                fontSize: fontSizes.h2
            }}>
                No food found
            </Text>
        </View>}
    </View>
}

export default FakeFoodList