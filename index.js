/**
 * @format
 */

import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'
import { Welcome, Login, FoodList, Settings } from './screens'
import Register from './screens/Register';

AppRegistry.registerComponent(appName,() => Settings);
