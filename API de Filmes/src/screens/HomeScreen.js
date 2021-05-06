import React, { useState, useEffect } from 'react';
import {Button, View, Text,TouchableOpacity, StyleSheet, FlatList, Image} from 'react-native';
import SearchBar from '../components/SearchBar';
import tmdb from '../api/tmdb';
import { AntDesign } from '@expo/vector-icons';
import ExibeObjeto from '../components/ExibeObjeto';

const HomeScreen = ( { navigation } ) => {

    const [text, setText] = useState('');
    const [valor, setValor] = useState(1);
    const [movie, setMovie] = useState([]);
    const [person, setPerson] = useState([]);
    const [result, setResult] = useState([]);
    const [tvShow, setTvShow] = useState([]);

    //Ele vai executar o console.log sempre que a pessoas digitar e dar enter.
    useEffect( () => {
        console.log("Fez o Effect do Movie");
        },[]);
    
    //Sempre que inicializar a aplicação ele vai iniciar com a barra de pesquisa com ó pai ó
   /*useEffect( () => {
        searchTmdb("Ó pai, Ó");
        },[]);*/

    async function searchTmdb(query){
      try{  
       const response = await tmdb.get('/search/movie',{
            params:{
                query,
                include_adult: false
            }
        });
        const responsePerson = await tmdb.get('/search/person',{
            params:{
                query
            }
        });
        const responseTvShow = await tmdb.get('/search/tv',{
            params:{
                query
            }
        });
        setResult(response.data.results);
        setMovie(response.data.results);
        setPerson(responsePerson.data.results);
        setTvShow(responseTvShow.data.results);

    }catch(erro){
        console.log(erro);
    }
    }

    return(
    <>
        <SearchBar
            value={text}
            onTextChange={(t) => setText(t)}
            onTextSubmit={(t) => searchTmdb(t)}
        />
        <View style={styles.botao}>
        <TouchableOpacity 
        style={styles.eachButton}
        onPress={function(){ setResult(movie),setValor(1)}}
        >
            <Text>Movie</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.eachButton}
        onPress={function(){ setResult(person),setValor(2)}}
        >
            <Text>People</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.eachButton}
        onPress={function(){ setResult(tvShow),setValor(3)}}
        >
            <Text>TV Show</Text>
        </TouchableOpacity>
        </View>

        <FlatList 
            data={result}
            keyExtractor={ item => item.id.toString()}
            renderItem={ ({ item }) => {
                return (    
                <View style={styles.containner}> 
                <TouchableOpacity
                onPress={() => {navigation.navigate('Details',{
                    id: item.id,
                    value:valor
                });
                }}
                >
                  <View style={styles.objeto}>
                      <ExibeObjeto panetone={item} tipo={valor} />
                  </View>
                </TouchableOpacity>
                </View>
                    );
                }                
            }
        />
    </>        
    )
}

const styles = StyleSheet.create({
   containner:{
        flexDirection: 'row',
        margin: 10,
    },objeto:{
        paddingLeft:2,
        borderRadius: 10,
        borderWidth:1,
        backgroundColor: 'lightgray',
        width: 335,
        padding:7
    },botao:{
        flexDirection: 'row',
        justifyContent : 'space-around',
    },eachButton:{
        padding:10,
        borderRadius: 10,
        backgroundColor: '#CC6600',
        marginBottom: 10,
        borderWidth:1
    },texto:{
        padding:2
    }
});

export default HomeScreen;