import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from "react-native";
import React, {useState, useEffect} from "react";
import { getEpisodeName } from "../api/character";
import { NavigationContainer } from "@react-navigation/native";

export default function Character({character, navigation}){
    //We call the function to get the data
    const [episode, setEpisode] = useState();
    const fetchEpisodeData = async() => {
        const request = await getEpisodeName (character.episode[0]);
        setEpisode(request);
    }
    useEffect(() => {
        fetchEpisodeData();
    })
//Define how the character information is printed, and define when the character is clicked it shows its details in a new screen
    return(
        <TouchableWithoutFeedback onPress={()=>{
            navigation.navigate("detailCharacter",{character})
        }}
        >
            <View style = {styles.character}>
            <View style = {styles.spacing}>
                <Image source = {{uri:character.image}} style ={styles.image}/>
                <View style = {styles.character__info}>
                <Text style = {styles.character__name}>{character.name}</Text>
                <View style = {StyleSheet.characters__status}>
                    <View style = {[styles.character__statusIndicator,
                    character.status === 'Alive'
                    ? styles.character__alive
                    :styles.character__dead
                    ]}/>
                <Text style = {styles.character__statusText}>{character.status} - {character.species}</Text>
                </View>
                </View>
                </View>
                </View>

        </TouchableWithoutFeedback>
    )
}   
//Styles
const styles={
    character:{
        felx:1,
        alignContent:"center",
        justifyContent:"center",
    },
    spacing:{
        flex:1,
        flexDirection:"row",
        paddingRight:10,
        paddingTop:20,
        paddingLeft:10
    },
    image:{
        position:"relative",
        width:180,
        height:180,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
    },
    character__info:{
        flex:1,
        flexDirection:"column",
        justifyContent:"center",
        alignContent:"flex-start",
        paddingLeft:10,
        height:"100%",
        backgroundColor:"#f1f7f8",
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
    },
    character__name:{
        height:25,
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        color:"black",
        fontSize:16,
        fontWeight:"bold"
    },
    character__alive:{
        backgroundColor:"#54DB33"
    },
    character__dead:{
        backgroundColor:"#AC1500"
    },
    character__statusIndicator:{
        flex:3,
        height:10,
        width:10,
        borderRadius:10
    },
    character__statusText:{
        fontSize:12
    }
}