import React, { useEffect } from 'react';
import { StyleSheet, Image, SafeAreaView } from 'react-native';

const image_url = "https://mystickermania.com/cdn/stickers/rick-and-morty/sticker_2060-512x512.png"

export default function SplashScreen({navigation}){

    useEffect(() => {
        setTimeout(() => {
            navigation.replace("Characters")
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
        width:250,
        height:250,
        alignSelf:'center'
    }
})
