import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerActions } from "@react-navigation/native";
import React from "react";
import CharactersScreen from "../screens/characterScreen";
import HomeScreen from "../screens/home";
import SettingsScreen from "../screens/settings";

const Drawer = createDrawerNavigator();

export default function NavigationDrawer(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name = "Home" component = {HomeScreen}/>
            <Drawer.Screen name = "Settings" component = {SettingsScreen}/>
            <Drawer.Screen name = "Charcters" component = {CharactersScreen}/>
        </Drawer.Navigator>
    )
}
