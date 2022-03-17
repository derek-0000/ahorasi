import { StyleSheet, View, Text, Button } from "react-native";
import React from "react"; 

export default function HomeScreen(props){
    const {navigation} = props
    console.log(props)
    const goToPage = () =>{

    }
    return(
        <View style={styles.container}>
            <Text>Home</Text>
            <Button onPress = {()=>{navigation.navigate("Home")}}title = "Go to settings"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  