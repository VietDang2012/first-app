import { Platform } from 'react-native'

export function isOs() {
    return Platform.OS === 'ios'
}