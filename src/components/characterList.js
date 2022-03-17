import React from "react"
import { FlatList, StyleSheet} from "react-native";
import Character from "./Character";

export default  function CharacterList({characters, navigation}){
    return(
        <FlatList
            data = {characters}
            numColumns = {1}
            showsVerticalScrollIndicator = {false}
            contentContainerStyle = {styles.flatListContentContainer}
            keyExtractor = {(character)=>String(character.id)}
            renderItem={({item})=><Character character = {item} navigation = {navigation}/>}
            />
    )
}

const styles = StyleSheet.create({
    flatListContentContainer:{
        paddingHorizontal: 5,
        backgroundColor:"#e2e7da"
    }
})