import React from 'react';
import { View, Text, Button } from 'react-native';

function LogoutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Deseja sair?</Text>
      <Button title="Sim" onPress={() => navigation.navigate('Login')} />
      <Button title="Não" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default LogoutScreen;