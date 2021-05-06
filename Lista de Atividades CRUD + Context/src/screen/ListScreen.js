import React, { useContext } from 'react';
import { BdContext } from '../context/BdContext';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

ListScreen = () => {
    const bdContext = useContext(BdContext);

    return (
    <>
    <View style={styles.containner}>
        <View>
        <Text style={styles.escrita}>Clique para excluir!</Text>
        </View>
        <FlatList
        data={bdContext.state.tarefa}
        keyExtractor={item => item.Id.toString()}
        renderItem={({ item }) => {
            return(
                <TouchableOpacity
                style={styles.botao}
                onPress={() => {bdContext.del({Id:item.Id,Titulo:item.Titulo,Descricao: item.Descricao})}}
                >
                <Text style={styles.notas}>Titulo: {item.Titulo}</Text>
                <Text style={styles.notas}>Descrição: {item.Descricao}</Text>
                 </TouchableOpacity>
            ) 
        }}
        />        
    </View>
    </>
    );
  }

  const styles = StyleSheet.create
  ({
    containner:{
      margin: 10,
      paddingLeft:2,
      borderRadius: 10,
      width: 335,
      padding:7,
      backgroundColor: 'lightgray',
    },
    botao:{
        borderRadius:10,
        marginTop:5,
        backgroundColor: '#F44336',
    },
    notas:{
        marginLeft:4,
    },
    escrita:{
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
    },
  });

  export default ListScreen;