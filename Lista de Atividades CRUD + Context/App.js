import React from 'react';
import HomeScreen from './src/screen/HomeScreen';
import AddScreen from './src/screen/AddScreen.js';
import EditScreen from './src/screen/EditScreen';
import EditarNotaScreen from './src/screen/EditarNotaScreen';
import ListScreen from './src/screen/ListScreen';
import { BdProvider } from './src/context/BdContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
const Stack = createStackNavigator();

function App() {
  return (
  <BdProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Add" component={AddScreen}/>
        <Stack.Screen name="EditarNota" component={EditarNotaScreen}/>
        <Stack.Screen name="Edit" component={EditScreen}/>
        <Stack.Screen name="List" component={ListScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    </BdProvider>
  );
}

export default App;