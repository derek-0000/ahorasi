import { View, ActivityIndicator, StyleSheet, SafeAreaView } from "react-native";
import React,{useState, useEffect, useMemo} from "react";
import { getCharacterApi } from "../api/character";
import CharacterList from "../components/characterList";
import { NavigationContainer } from "@react-navigation/native";
import { onChange } from "react-native-reanimated";


export default function CharactersScreen({navigation}){

    const[characters, setCharacters] = useState([]);
    const [filterData, setFilterData] = useState ("");
    const [loading, setLoading] = useState(true)
    const fetchCharacter = async () => {
        const response = await getCharacterApi();
        setCharacters(response);
        setLoading(false)
    }

    const handleSearch = (text) =>{
        setFilterData(text);
    }

    const filteredCharacters = useMemo(() => 
        characters.filter((character) =>{
            return character.name.toLowerCase().includes(filterData.toLowerCase())
        }),[characters,filterData]
    )

    useEffect(()=>{
        navigation.setOptions({
            headerSearchBarOptions:{
            placeholder:"Search Character",
            onChangeText:(event)=>{
                handleSearch(event.nativeEvent.text);
                },
            }
        })
        fetchCharacter();
        setLoading(false)
    })
    
    return( 
        <SafeAreaView style = {styles.container}>{
        loading ? 
        <SafeAreaView style = {(styles.container_indicator, styles.horizontal)}>
            <ActivityIndicator size={"large"} color = {"#54DB33"}/>
        </SafeAreaView>
        :
        <SafeAreaView>
            <CharacterList 
            characters = {filteredCharacters} 
            navigation = {navigation}
            />
        </SafeAreaView>
        }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container_indicator:{
        flex:1,
        justifyContent:"center"
    },
    horizontal:{
        flexDirection:"row",
        justifyContent:"space-around",
        padding:10
    },
    container:{
        height:"100%",
        backgroundColor:"#f1f7f8"
    }
})

