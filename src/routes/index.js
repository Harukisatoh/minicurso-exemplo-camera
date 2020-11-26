import React from 'react'
import { TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/Main'
import Users from '../pages/Users'
import CameraScreen from '../pages/CameraScreen'

import { FontAwesome } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

function Routes() {
    const Stack = createStackNavigator()
    
    
    return(
        <Stack.Navigator>
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Users" component={Users} options={({ navigation }) => ({ headerRight: () => {
                function goToCamera() {
                    navigation.navigate('CameraScreen')
                }

                return (
                    <TouchableOpacity style={{ marginRight: 15 }} onPress={goToCamera}>
                        <FontAwesome name="camera" size={24} color="black" />
                    </TouchableOpacity>
                )
            } })} />
            <Stack.Screen name="CameraScreen" component={CameraScreen} />
        </Stack.Navigator>
    )
}

export default Routes