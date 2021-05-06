import React, { useState, useEffect } from 'react';
import {View, Text,TouchableOpacity, StyleSheet,Image} from 'react-native';
import tmdb from '../api/tmdb';

function misericordia(objeto, id){
    if(id == 1){
        return( 
        <View style={styles.linha}>
            <Image source={{uri: `https://image.tmdb.org/t/p/w500${objeto.backdrop_path}`}} 
            style={styles.imagem}
            />
            <Text style={styles.texto}>{objeto.original_title}</Text>
        </View>)
    }else if(id == 2){
        return( 
        <View style={styles.linha}>
            <Image source={{uri: `https://image.tmdb.org/t/p/w500${objeto.profile_path}`}}
            style={styles.imagem}
            />
            <Text style={styles.texto}>{objeto.name}</Text>
        </View>
        )
    }else if(id == 3){
        return(
        <View style={styles.linha}>
            <Image source={{uri: `https://image.tmdb.org/t/p/w500${objeto.backdrop_path}`}}
            style={styles.imagem}
            />
            <Text style={styles.texto}>{objeto.name}</Text>
        </View>
            )
    }
}

const ExibeObjeto = ({panetone, tipo}) =>{
    return(
        misericordia(panetone,tipo)
        );    
    }

const styles = StyleSheet.create({
    texto:{
        left:5,
        flex:1,
        textAlign: "center",
        fontWeight:"bold",
        bottom: -35        
     },imagem:{
        width: 100,
        height: 100,
        borderRadius:5,
        left:5
     },linha:{
         flexDirection:'row'
     }
 });

export default ExibeObjeto;