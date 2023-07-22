import React, { Component, useState, useEffect } from 'react'
import { Text, View, ScrollView, Switch, SafeAreaView } from 'react-native'
import { icons, images, colors, fontSizes } from '../constants'
import { UIHeader } from '../components'
import Icon from 'react-native-vector-icons/FontAwesome5'

function Settings(props) {
    const [isEnabledLockApp, setEnabledLockApp] = useState(false);
    const [isUseFingerprint, setUseFingerprint] = useState(true);
    const [isEnabledChangePassword, setEnabledChangePassword] = useState(true);

    return <SafeAreaView style={{
        flex: 1
    }}>
        <UIHeader tilte={'Settings'} />
        <ScrollView>
            <View style={{
                justifyContent: 'center',
                backgroundColor: colors.behind,
            }}>
                <Text style={{
                    color: colors.primary,
                    fontSize: fontSizes.h2,
                    fontWeight: 'bold',
                    padding: 10
                }}>
                    Common
                </Text>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Icon name='globe' size={24} style={{
                    margin: 12,
                    color: 'black'
                }} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h3,
                }}>
                    Global
                </Text>
                <View style={{ flex: 1 }} />
                <Text style={{
                    color: 'black',
                    opacity: 0.5,
                    fontSize: fontSizes.h3,
                }}>
                    English
                </Text>
                <Icon name='chevron-right' size={24} style={{
                    margin: 12
                }} />
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Icon name='tree' size={24} style={{
                    margin: 12,
                    color: 'black'
                }} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h3,
                }}>
                    Environment
                </Text>
                <View style={{ flex: 1 }} />
                <Text style={{
                    color: 'black',
                    opacity: 0.5,
                    fontSize: fontSizes.h3,
                }}>
                    Production
                </Text>
                <Icon name='chevron-right' size={24} style={{
                    margin: 12
                }} />
            </View>
            <View style={{
                justifyContent: 'center',
                backgroundColor: colors.behind,
            }}>
                <Text style={{
                    color: colors.primary,
                    fontSize: fontSizes.h2,
                    fontWeight: 'bold',
                    padding: 10
                }}>
                    Account
                </Text>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Icon name='phone' size={24} style={{
                    margin: 12,
                    color: 'black'
                }} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h3,
                }}>
                    Phone number
                </Text>
                <View style={{ flex: 1 }} />
                <Icon name='chevron-right' size={24} style={{
                    margin: 12
                }} />
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Icon name='envelope' size={24} style={{
                    margin: 12,
                    color: 'black'
                }} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h3,
                }}>
                    Email
                </Text>
                <View style={{ flex: 1 }} />
                <Icon name='chevron-right' size={24} style={{
                    margin: 12
                }} />
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Icon name='arrow-right' size={24} style={{
                    margin: 12,
                    color: 'black'
                }} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h3,
                }}>
                    Sign out
                </Text>
                <View style={{ flex: 1 }} />
                <Icon name='chevron-right' size={24} style={{
                    margin: 12
                }} />
            </View>
            <View style={{
                justifyContent: 'center',
                backgroundColor: colors.behind,
            }}>
                <Text style={{
                    color: colors.primary,
                    fontSize: fontSizes.h2,
                    fontWeight: 'bold',
                    padding: 10
                }}>
                    Security
                </Text>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Icon name='mobile' size={24} style={{
                    margin: 12,
                    color: 'black'
                }} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h3,
                }}>
                    Lock app in background
                </Text>
                <View style={{ flex: 1 }} />
                <Switch
                    trackColor={{ false: colors.inactive, true: colors.primary }}
                    thumbColor={isEnabledLockApp ? colors.primary : colors.inactive}
                    // ios_backgroundColor="#3e3e3e"
                    onValueChange={() => {
                        setEnabledLockApp(!isEnabledLockApp)
                    }}
                    value={isEnabledLockApp}
                    style={{ marginEnd: 10 }}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Icon name='fingerprint' size={24} style={{
                    margin: 12,
                    color: 'black'
                }} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h3,
                }}>
                    Use fingerprint
                </Text>
                <View style={{ flex: 1 }} />
                <Switch
                    trackColor={{ false: colors.inactive, true: colors.primary }}
                    thumbColor={isUseFingerprint ? colors.primary : colors.inactive}
                    // ios_backgroundColor="#3e3e3e"
                    onValueChange={() => {
                        setUseFingerprint(!isUseFingerprint)
                    }}
                    value={isUseFingerprint}
                    style={{ marginEnd: 10 }}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Icon name='lock' size={24} style={{
                    margin: 12,
                    color: 'black'
                }} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h3,
                }}>
                    Change password
                </Text>
                <View style={{ flex: 1 }} />
                <Switch
                    trackColor={{ false: colors.inactive, true: colors.primary }}
                    thumbColor={isEnabledChangePassword ? colors.primary : colors.inactive}
                    // ios_backgroundColor="#3e3e3e"
                    onValueChange={() => {
                        setEnabledChangePassword(!isEnabledChangePassword)
                    }}
                    value={isEnabledChangePassword}
                    style={{ marginEnd: 10 }}
                />
            </View>
            <View style={{
                justifyContent: 'center',
                backgroundColor: colors.behind,
            }}>
                <Text style={{
                    color: colors.primary,
                    fontSize: fontSizes.h2,
                    fontWeight: 'bold',
                    padding: 10
                }}>
                    Misc
                </Text>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Icon name='file' size={24} style={{
                    margin: 12,
                    color: 'black'
                }} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h3,
                }}>
                    Term of Service
                </Text>
                <View style={{ flex: 1 }} />
                <Icon name='chevron-right' size={24} style={{
                    margin: 12
                }} />
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Icon name='folder' size={24} style={{
                    margin: 12,
                    color: 'black'
                }} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h3,
                }}>
                    Open source licenses
                </Text>
                <View style={{ flex: 1 }} />
                <Icon name='chevron-right' size={24} style={{
                    margin: 12
                }} />
            </View>
        </ScrollView>
    </SafeAreaView>
}

export default Settings