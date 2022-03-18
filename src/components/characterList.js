import React from "react"
import { FlatList, StyleSheet} from "react-native";
import Character from "./Character";

///Function that defines the formation of the list that will show the characters
export default  function CharacterList({characters, navigation}){
    console.log(characters)
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