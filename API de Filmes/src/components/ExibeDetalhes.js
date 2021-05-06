import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';



const ExibeDetalhes = ({name, image, description}) =>{

    return(
    <>
        <Text style={styles.titulo}>{name}</Text>
        <Image style={styles.imagem} source={{uri: `https://image.tmdb.org/t/p/w500/${image}`}} />
        <Text style={styles.descricao}>{description}</Text>
    </>
    );
}

const styles = StyleSheet.create({
    titulo:{
        textAlign: 'center',
        fontWeight:"bold",
        fontSize: 30

    },imagem:{
        width: 150,
        height: 150,
        borderRadius:5,
        left:5,
        
     },descricao:{
         padding: 10,
         fontStyle: 'italic',
         textAlign: "justify"
     }
});

export default ExibeDetalhes;