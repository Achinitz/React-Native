import React, {useState, useContext} from 'react';
import { BdContext } from '../context/BdContext';
import { View, Text, Button,TextInput, StyleSheet,TouchableOpacity } from 'react-native';

const AddScreen = ({navigation}) => {
    //Variaveis locais
    const bdContext = useContext(BdContext);
    const[id,setId] = useState(bdContext.objeto.Id);
    const [descricao, setDescricao] = useState(bdContext.objeto.Descricao.toString());
    const [titulo, setTitulo] = useState(bdContext.objeto.Titulo.toString());
    
    funcao = () => {
        bdContext.update({Id:id,Titulo:titulo,Descricao: descricao});
        navigation.navigate('Edit');
    }

    return (
    <>
    <View style={styles.containner}>
      <View>
        <Text style={styles.escrita}>Editar nota.</Text>
      </View>
      <Text>Informe o titulo</Text>
      <TextInput 
      autoCapitalize="none"
      autoCorrect={false}
      placeholder = "  Titulo"
      style = {styles.textInput}
      value={titulo}
      onChangeText={(t) => setTitulo(t)}
      />
      
      <Text>Informe a descrição</Text>
      <TextInput 
      autoCapitalize="none"
      autoCorrect={false}
      placeholder = "  Descricao"
      style = {styles.textInput}
      value={descricao}
      onChangeText={(d) => setDescricao(d)}
      />
      
      <TouchableOpacity 
      title="Finalizar edição"
      onPress={() => {funcao()}}
      >
      <Text style={styles.descBotao}>Finalizar Edição!</Text>
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