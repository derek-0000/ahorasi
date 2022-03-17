
import React from 'react'
import HomeScreen from '../screens/home'
import SettingsScreen from '../screens/settings'
import Ionicons from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

export default function NavigationTab(){
    return(
        <Tab.Navigator
        screenOptions ={({route})=>{
            tabBarIcon : ({focused,  color, size})=> {
                let iconName;
                if(route.name === 'Home'){
                    iconName = focused ? 'home' : 'home-outline';
                }
                else if(route.name === 'Settings'){
                    iconName = focused 
                }
            }
        }}>
            <Tab.Screen name = 'Home' component = {HomeScreen}/>
            <Tab.Screen name = 'Settings' component = {SettingsScreen}/>
        </Tab.Navigator>
    )
}