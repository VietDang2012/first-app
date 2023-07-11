import * as React from 'react'
import { Settings, FoodList } from '../screens'
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
    tabBarIcon: ({ focused, color, size }) => {
        let screenName = route.name
        let iconName = ''
        if (screenName == 'FoodList') {
            iconName = 'spoon'
        } else if (screenName == 'Grid') {
            iconName = 'box'
        } else {
            iconName = 'cogs'
        }
        return <Icon
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
                    fontSize: 12
                }
            }}
        />
        <Tab.Screen
            name={'Settings'}
            component={Settings}
            options={{
                tabBarLabel: 'Settings',
                tabBarLabelStyle: {
                    fontSize: 12,
                }
            }}
        />
    </Tab.Navigator>
}

export default UItab
