import React, { useState } from 'react'
import { Text, View, Image, TouchableOpacity, Alert, TextInput, FlatList, SafeAreaView } from 'react-native'
import { icons, images, colors, fontSizes } from '../../constants'
import Icon from 'react-native-vector-icons/FontAwesome'
import FoodItem from './FoodItem'

function FoodList(props) {
    const [foods, setFoods] = useState([
        {
            name: 'Pho bo gia truyen',
            url: 'https://img.taste.com.au/SGF3qTIo/taste/2016/11/50-slow-cooker-dinners-under-500-calories-108488-2.jpeg',
            status: 'Opening now',
            price: 200,
            website: 'https://edition.cnn.com/',
            socialNetwork: {
                instagram: 'instagram',
            }
        },
        {
            name: 'Bubble tea',
            url: 'https://assets.epicurious.com/photos/5953ca064919e41593325d97/1:1/w_2560%2Cc_limit/bubble_tea_recipe_062817.jpg',
            status: 'Opening now',
            price: 200,
            website: 'https://edition.cnn.com/',
            socialNetwork: {
                facebook: 'facebook.com',
            }
        },
        {
            name: 'Taco',
            url: 'https://static.onecms.io/wp-content/uploads/sites/43/2023/01/30/70935-taqueria-style-tacos-mfs-3x2-35.jpg',
            status: 'Closing soon',
            price: 200,
            website: 'https://edition.cnn.com/',
            socialNetwork: {
                twitter: 'twitter.com'
            }
        },
        {
            name: 'Banh mi bo',
            url: 'https://static.onecms.io/wp-content/uploads/sites/43/2023/01/31/roasted-pork-banh-mi-vietnamese-sandwitch-ddmfs-3X4-0332.jpg',
            status: 'Opening now',
            price: 200,
            website: 'https://edition.cnn.com/',
            socialNetwork: {
                facebook: 'facebook.com',
                twitter: 'twitter.com'
            }
        },
        {
            name: 'Kimchi',
            url: 'https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi.jpg',
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
            name: 'Spicy fried chicken wings',
            url: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/12/7/1/FNM_010112-Light-Rich-016_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382540926737.jpeg',
            status: 'Closing soon',
            price: 200,
            website: 'https://edition.cnn.com/',
            socialNetwork: {
                instagram: 'instagram',
                twitter: 'twitter.com'
            }
        },
        {
            name: 'Cheese burger',
            url: 'https://www.sargento.com/assets/Uploads/Recipe/Image/burger_0.jpg',
            status: 'Opening now',
            price: 200,
            website: 'https://edition.cnn.com/',
            socialNetwork: {
                facebook: 'facebook.com',
                twitter: 'twitter.com'
            }
        },
        {
            name: 'Salmon sushi',
            url: 'https://ichisushi.com/wp-content/uploads/2022/04/Best-Salmon-Sushi-Recipes-1024x682.jpg',
            status: 'Closing soon',
            price: 200,
            website: 'https://edition.cnn.com/',
            socialNetwork: {
                twitter: 'twitter.com'
            }
        },
        {
            name: 'Pepperoni pizza',
            url: 'https://www.cobsbread.com/us/wp-content//uploads/2022/09/Pepperoni-pizza-850x630-1.png',
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

    return <SafeAreaView style={{
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
                height: 100
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
            style={{
                backgroundColor: colors.behind
            }}
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
    </SafeAreaView>
}

export default FoodList