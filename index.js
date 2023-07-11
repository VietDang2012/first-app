/**
 * @format
 */

import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'
import { Welcome, Login, FoodList, Settings, Register } from './screens'
// import UItab from './navigation/UItab'
import App from './navigation/App'

AppRegistry.registerComponent(appName,() => <Register/>);
