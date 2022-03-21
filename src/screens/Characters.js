import React, {useState, useEffect} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { getDetails } from '../api/getDetails';

const Characters = props => {

        const[character, setCharacter] = useState({});
        const [image, setImages] = useState({});
        useEffect(()=>{
            const fetchCharacterData = async() => {
            const character = await getDetails(props.route.params.mal_id);
            setCharacter(character.data);
            setImages(character.data.images.jpg)
            
        }
        fetchCharacterData();
        })

    return (
        <View style = {styles.container}>
            <Text style = {styles.characterDataName}>{character.name}</Text>
            <Text style = {styles.characterDataName}>{character.name_kanji}</Text>
            <Text style = {styles.characterData}>{character.about}</Text>
            <Image source={{uri: image.image_url}} style ={styles.image}/>
        </View>
    );
};
export default Characters;

// export default function Characters(){
//     const[character, setCharacter] = useState({});
//     const [image, setImages] = useState({});
//     useEffect(()=>{
//         const fetchCharacterData = async() => {
//         const character = await getDetails(66171);
//         setCharacter(character.data);
//         setImages(character.data.images.jpg)
//     }
//         fetchCharacterData();
//     })
//     return(
//         <View>
//             <Text>{character.name}</Text>
//             <Text>{character.name_kanji}</Text>
//             <Text>{character.about}</Text>
//             <Image source={{uri: image.image_url}} style ={styles.image}/>
//         </View>
//     )
// }
const styles= StyleSheet.create({
    image:{
        position:"relative",
        alignSelf:"center",
        width:180,
        height:180,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
    },
    characterData:{
        position:"relative",
        justifyContent:"center",
        textAlign:"center"
    },
    characterDataName:{
        position:"relative",
        justifyContent:"center",
        textAlign:"center",
        fontWeight:"bold",
        fontSize:16,
        fontStyle:"italic"
    },
    container:{
        alignSelf:'center'
    }
})