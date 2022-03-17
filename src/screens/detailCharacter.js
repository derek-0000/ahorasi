import React from 'react';
import  { View, Text, StyleSheet, Image } from 'react-native'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function DetailCharacter(props){
    const { character } = props.route.params;
    return(
        <View style = {styles.container}>
                <View style = {styles.content}>
                <Image style = {styles.image} source = {{uri: character.image}}/>
                <Text style = {styles.title}>Name:</Text>
                <Text style = {styles.info}>{character.name}</Text>
                <Text style = {styles.title}>Gender:</Text>
                <Text style = {styles.info}>{character.gender}</Text>
                <Text style = {styles.title}>Status:</Text>
                <Text style = {styles.info}>{character.status}</Text>
                <Text style = {styles.title}>Species:</Text>
                <Text style = {styles.info}> {character.species}</Text>
                <Text style = {styles.title}>Origin:</Text>
                <Text style = {styles.info}>{character.origin.name}</Text>
                <Text style = {styles.title}>Location:</Text>
                <Text style = {styles.info}>{character.location.name}</Text>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: "100%",
        backgroundColor:"#e2e7da"
    },
    content:{
        flex:1,
        marginTop:80,
        marginBottom:130,
        justifyContent:"flex-start",
        alignContent:"center",
        margin:20,
        borderRadius:30,
        backgroundColor:"#f1f7f8",
        borderRadius:15,
        elevation:5,
    },
    title:{
        justifyContent:"center",
        alignContent:"center",
        fontWeight:"bold",
        alignSelf:"center"
    },
    info:{
        alignSelf:"center"
    },
    image:{
        margin:10,
        position:"relative",
        alignSelf:"center",
        width:200,
        height:200,
        borderRadius:150
    }
})