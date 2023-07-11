import * as React from 'react'
import { Settings, FoodList } from '../screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { fontSizes, colors } from '../constants'

const Tab = createBottomTabNavigator()

function UItab(props) {
    return <Tab.Navigator>
        <Tab.Screen name={FoodList} component={FoodList} />
        <Tab.Screen name={Settings} component={Settings} />
    </Tab.Navigator>
}

export default UItab
