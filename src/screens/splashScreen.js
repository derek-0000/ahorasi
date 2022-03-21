import React, { useEffect } from 'react';
import { StyleSheet, Image, SafeAreaView } from 'react-native';

const image_url = "https://static.wikia.nocookie.net/doblaje/images/9/9e/Horimiya_-_Poster.jpg/revision/latest?cb=20210810165454&path-prefix=es"

export default function SplashScreen({navigation}){

    useEffect(() => {
        setTimeout(() => {
            navigation.replace("CharactersList")
        },3000)
    });
    return(
        <SafeAreaView style = {styles.image_container}>
            <Image source={{uri:image_url}} style = {styles.image}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image_container:{
        flex:1,
        justifyContent:"center",
        alignContent:"center",
        backgroundColor:"#e2e7da"
    },
    image:{
        width:400,
        height:650,
        alignSelf:'center'
    }
})