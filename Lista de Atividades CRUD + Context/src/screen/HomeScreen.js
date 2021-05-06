import React, { useReducer,useContext } from 'react';
import { View, Text, Button,StyleSheet,TouchableOpacity,FlatList } from 'react-native';
import { color } from 'react-native-reanimated';
import { BdContext } from '../context/BdContext';

    HomeScreen = ({ navigation }) => {
    const bdContext = useContext(BdContext);
    return (
    <>
    <View style={styles.containner}>
        
        <View>
        <Text style={styles.escrita}>Bloco de notas</Text>
        </View>

        <View style={styles.anotacoes}>
        <FlatList
        data={bdContext.state.tarefa}
        keyExtractor={item => item.Id.toString()}
        renderItem={({ item }) => {
            return(
                <Text style={styles.notas}>Nota {item.Id + 1}: {item.Titulo}</Text>
            ) 
        }}
        /> 
        </View>

        <TouchableOpacity
        style={styles.botoes}
        onPress={() => {navigation.navigate('Add');}}>
        <Text style={styles.descBotoes}>Adicionar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
        style={styles.botoes} 
        onPress={() => {navigation.navigate('Edit');}}>
        <Text style={styles.descBotoes}>Editar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
        style={styles.botoes}
        onPress={() => {navigation.navigate('List');}}>
        <Text style={styles.descBotoes}>Listar</Text>
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
      borderRadius: 10,
      width: 335,
      padding:7
    },
    botoes:{
      borderRadius: 30,
      height:30,
      backgroundColor: 'lightgray',
      paddingLeft:2,
      borderWidth: 1,
      marginTop:10
    },
    escrita:{
      fontWeight: 'bold',
      fontSize: 40,
      textAlign: 'center',
      marginBottom:5,
    },
    descBotoes:{
      textAlign: 'center',
      fontWeight: 'bold',
      marginTop:4,
    },
    anotacoes:{
      borderRadius: 10,
      borderWidth:1,
      height:200,
      backgroundColor: 'khaki',
    },
    notas:{
      marginLeft:4
    }
  });

  export default HomeScreen;