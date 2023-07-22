import * as React from 'react'
import { Settings, FoodList, Profile, Photo } from '../screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { fontSizes, colors } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome'

const Tab = createBottomTabNavigator()
const screenOptions = ({ route }) => ({
    headerShown: false,
    tabBarActiveTintColor: 'white',
    tabBarInactiveTintColor: colors.inactive,
    tabBarActiveBackgroundColor: colors.primary,
    tabBarInactiveBackgroundColor: colors.primary,
    tabBarBackgroundColor: function() {
        return <View style={{ backgroundColor: colors.primary, flex: 1 }}></View>
    },
    tabBarHideOnKeyboard: function() {
        tabBarHideOnKeyboard: true
    },
    tabBarIcon: ({ focused, color, size }) => {
        let screenName = route.name
        let iconName = ''
        if (screenName == 'FoodList') {
            iconName = 'spoon'
        } else if (screenName == 'Grid') {
            iconName = 'box'
        } else if (screenName == 'Profile') {
            iconName = 'user'
        } else if (screenName == 'Photo') {
            iconName = 'image'
        } else {
            iconName = 'cogs'
        }
        return <Icon
            style={{ paddingTop: 2 }}
            name={iconName}
            size={28}
            color={focused ? 'white' : color.inactive}
        />
    }
})

function UItab(props) {
    return <Tab.Navigator
        screenOptions={
            screenOptions
        }>
        <Tab.Screen
            name={'FoodList'}
            component={FoodList}
            options={{
                tabBarLabel: 'Foods',
                tabBarLabelStyle: {
                    fontSize: fontSizes.h6,
                    fontWeight: 'bold'
                }
            }}
        />
        <Tab.Screen
            name={'Profile'}
            component={Profile}
            options={{
                tabBarLabel: 'Profile',
                tabBarLabelStyle: {
                    fontSize: fontSizes.h6,
                    fontWeight: 'bold'
                }
            }}
        />
        <Tab.Screen
            name={'Photo'}
            component={Photo}
            options={{
                tabBarLabel: 'Photo',
                tabBarLabelStyle: {
                    fontSize: fontSizes.h6,
                    fontWeight: 'bold'
                }
            }}
        />
        <Tab.Screen
            name={'Settings'}
            component={Settings}
            options={{
                tabBarLabel: 'Settings',
                tabBarLabelStyle: {
                    fontSize: fontSizes.h6,
                    fontWeight: 'bold'
                }
            }}
        />
    </Tab.Navigator>
}

export default UItab
