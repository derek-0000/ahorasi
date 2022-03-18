import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import CharactersScreen from '../screens/characterScreen';
import DetailCharacter from '../screens/detailCharacter';
import SplashScreen from '../screens/splashScreen';

const Stack = createNativeStackNavigator();
//Creates the stack with its screens
export default function NavigationStack(){
    return(
        <Stack.Navigator initialRouteName='splashScreen'>
            <Stack.Screen name = 'splashScreen' component = {SplashScreen} options = {{headerShown:false}}/>
            <Stack.Screen name = 'Characters' component = {CharactersScreen}/>
            <Stack.Screen name = 'detailCharacter' component = {DetailCharacter}/>
        </Stack.Navigator>
    )
}