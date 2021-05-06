import React, { useState, useEffect } from 'react';
import {View, Text,TouchableOpacity, StyleSheet,Image} from 'react-native';
import tmdb from '../api/tmdb';
import ExibeDetalhes from '../components/ExibeDetalhes';

//Para trabalhar com imagens, ler o getting started -> images no site do the movia api

const DetailsScreen = ({ route, navigation }) => {
    
    const [imagem, setImagem] = useState("");
    const [nome, setNome] = useState();
    const [descricao, setDescricao] = useState();

    async function getObjeto(id,value){
        try{

            if(route.params.value == 1){
                const response = await tmdb.get(`/movie/${id}`, {
                    params: {
                        include_adult: false
                    }
                });
                setNome(response.data.original_title);
                setImagem(response.data.backdrop_path);
                setDescricao(response.data.overview);
            }else if(route.params.value == 2){
                const response = await tmdb.get(`/person/${id}`);
                setNome(response.data.name);
                setImagem(response.data.profile_path);
                setDescricao(response.data.biography);
            }else if(route.params.value == 3){
                const response = await tmdb.get(`/tv/${id}`);
                setNome(response.data.name);
                setImagem(response.data.backdrop_path);
                setDescricao(response.data.overview);
            }
        }catch(erro){
            console.log(erro);
        }
    }

    useEffect(() => {
        getObjeto(route.params.id);
    },[]);

return(<ExibeDetalhes name={nome} description={descricao} image={imagem}/>)

}

const styles = StyleSheet.create({

});

export default DetailsScreen;