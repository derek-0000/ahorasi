import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import Characters from '../screens/Characters';
import CharactersList from '../screens/CharactersList';
import SplashScreen from '../screens/splashScreen';


const Stack = createNativeStackNavigator();
//Creates the stack with its screens
export default function NavigationStack(){
    return(
        <Stack.Navigator initialRouteName='splashScreen'>
            <Stack.Screen name = 'splashScreen' component = {SplashScreen} options = {{headerShown:false}}/>
            <Stack.Screen name = 'Characters' component = {Characters}/>
            <Stack.Screen  name = 'CharactersList' component = {CharactersList}/>
        </Stack.Navigator>
    )
}