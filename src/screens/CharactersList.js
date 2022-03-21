import React, {useState, useEffect, Component} from 'react';
import Characters from './Characters';
import { Text, View, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";

export default class CharactersList extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            charactersList:[]
        }
    }
componentDidMount(){
    fetch('https://api.jikan.moe/v4/anime/42897/characters/').then((response) => response.json())
    .then((responseJson)=>{
        this.setState({
            isLoading:false,
            charactersList:responseJson
            
        })
    }) 
}

render(){
    if(this.state.isLoading){
        return(
            <View>
                <Text>Loading</Text>
            </View>
        )
    }
    return(
        <View>
            <Text style = {styles.title}>Hori-san to Miyamura-kun Chratcers</Text>
            <FlatList
                data = {this.state.charactersList.data}
                renderItem=
                {({item})=>
                <View style = {styles.data}>
                    <TouchableOpacity
                            onPress={() =>
                                this.props.navigation.navigate('Characters', {
                                    mal_id: item.character.mal_id
                                })
                            }
                        >
                    <Text>{item.character.name}</Text>

                    </TouchableOpacity>
                </View>
            }
            />
        </View>
    )
}
}
const styles= StyleSheet.create({
    title:{
        textAlign:"center",
        fontWeight:"bold",
        fontSize:20,
        fontStyle:"italic"
    },
    data:{
        position:"relative",
        justifyContent:"center",
        textAlign:"center",
        padding:10,
        alignSelf:"center"
    }
})


// const CharactersList = props => {
//     const [isLoading, setLoading] = useState(false);
//     const [characters, setCharacters] = useState([]);
//     getCharacters = () => {
//         fetch('https://api.jikan.moe/v4/anime/42897/characters/')
//           .then((response) => response.json())
//           .then((json) => setCharacters(json))
//           .catch((error) => console.error(error))
//           .finally(() => setLoading(false));
//           console.log(characters)
//     }
//     useEffect(() => {
//         setLoading(true);
//         getCharacters();
//     }, []);
//     return(
//         <View style={{ padding: 20 }}>
//             {isLoading ? <Text>Loading...</Text> :
//             (
//                 <FlatList
//                     data={characters}
//                     numColumns = {1}
//                     renderItem={({ item }) => <Text>{item.name}</Text>}
//                 />
//             )}
//         </View>
//     );
// };
// export default CharactersList;

// export function CharactersList(){
//     const[character, setCharacters] = useState({});
//     const [images, setImages] = useState({});
//     useEffect(()=>{
//         const fetchCharacterData = async() => {
//         const list = await getCharacters();
//         list => setCharacters(list)
//         console.log(list)
//         // this.setState({characters: list.data})
//         // setCharacter(list.data);
//         // setImages(list.data.images.jpg)
//     }
//         fetchCharacterData();
//     })
        

// return(

//     <View>
//         <FlatList
//         data={character}
//         keyExtractor={({mal_id})=>mal_id.toString()}
//         renderItem={({ character })=><Text>{character.data.name}</Text>}
//         />


//     </View>
    
// )
// }