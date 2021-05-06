import React, {useState, useContext} from 'react';
import { BdContext } from '../context/BdContext';
import { View, Text, Button,TouchableOpacity,TextInput,StyleSheet } from 'react-native';

const AddScreen = () => {
    //Variaveis locais
    const [descricao, setDescricao] = useState("");
    const [titulo, setTitulo] = useState("");
    const [nomeDoBotao,setNomeDoBotao] = useState("Adicionar");
    const bdContext = useContext(BdContext);

    funcao = () => {
        bdContext.add({Id:0,Titulo:titulo,Descricao: descricao});
        setDescricao("");
        setTitulo("");
    }

    return (
    <>
    <View style={styles.containner}>
      <View>
        <Text style={styles.escrita}>Cadastrar uma nota.</Text>
      </View>
      <Text style={styles.titulo}>Informe um titulo</Text>
      <TextInput 
      autoCapitalize="none"
      autoCorrect={false}
      placeholder = "  Titulo"
      style = {styles.textInput}
      value={titulo}
      onChangeText={(t) => setTitulo(t)}
      />
      
      <Text style={styles.titulo}>Informe uma descrição</Text>
      <TextInput 
      autoCapitalize="none"
      autoCorrect={false}
      placeholder = "  Descricao"
      style = {styles.textInput}
      value={descricao}
      onChangeText={(d) => setDescricao(d)}
      />
      
      <TouchableOpacity 
      title="Adicionar"
      style={styles.botao}
      onPress={() => {funcao()}}>
      <Text style={styles.descBotao}>Adicionar</Text>
      </TouchableOpacity>
      </View>
    </>
    );
  }

  const styles = StyleSheet.create
  ({
    containner:{
      margin: 10,
      paddingLeft:2,
      borderRadius: 5,
      width: 335,
      padding:7,
      backgroundColor: 'lightgray',
    },
    textInput:{
      borderWidth:1,
      borderRadius: 5,
      height:40,
    },
    titulo:{
      fontWeight: 'bold',
      fontSize: 15,
    },
    descBotao:{
      textAlign: 'center',
      fontWeight: 'bold',
      marginTop: 4,
      fontSize: 17,
      backgroundColor: '#81c784',
      borderWidth: 1,
      borderRadius: 5,
    },
    botao:{
      marginTop:10,
      marginLeft:4,
    },
    escrita:{
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
      marginBottom:10,
    },
  });

  export default AddScreen;