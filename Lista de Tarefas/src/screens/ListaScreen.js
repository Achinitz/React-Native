import React, {useState} from 'react';
import { FlatList, TextInput, Text, View, StyleSheet, TouchableOpacity} from 'react-native';

function ListaScreen() {

  const [text, setText] = useState('');
  const [vara, setVara] = useState([]);
  const [aux, setAux] = useState([]);
  
  function adicionaTarefa(){
    setVara([...vara,{id:vara.length,nome:text, estado:1, cor:"yellow", linha:"none"}])
  }

  /*function ordenar(){

    var contador = 0;  

    vara.forEach(auxiliar=> {
        if(auxiliar.estado === 1){
            setAux([...aux,auxiliar])
        }
    });
    vara.forEach(variavel=> {
        if(variavel.estado === 0){
            setAux([...aux,variavel])
        }
    });
    setVara(aux);
  }*/

 const alteraCor = (arg) => {
    vara.forEach(valor => {
    if(valor.id === arg.id){
      if(arg.estado === 1){
        vara[arg.id].estado = 0; 
        vara[arg.id].cor = "gray";
        vara[arg.id].linha = "line-through";
      }else{
        vara[arg.id].estado = 1; 
        vara[arg.id].cor = "yellow";
        vara[arg.id].linha = "none";
      }
    }
    });
    var auxiliar= vara;
    setVara(auxiliar);
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
      placeholder="Escreva algo..."
      value={text}
      style={styles.textInput}
      onChangeText={(t) => setText(t)}
      onEndEditing={() => adicionaTarefa()}
      />
      <FlatList
      /*data={vara.sort((a,b) => a.estado > b.estado)}*/
      data={vara}
      keyExtractor={item => item.id}
      renderItem={({ item }) => {
        return(
          <View>
          <TouchableOpacity 
          onPress={() => alteraCor(item)}
          >
          <Text
            style={{
              backgroundColor:item.cor,
              textDecorationLine: item.linha,
              height: 25,
              width: 90,
              alignItems: 'center'
            }}>
            {item.nome}</Text>
          </TouchableOpacity>
          </View>          
        )
      }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput:{
    borderWidth:1,
    borderColor:'black',
  },
  texto:{
    
  }
});

export default ListaScreen;