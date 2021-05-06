import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './src/context/AuthContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import LogoutScreen from './src/screens/LogoutScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function HomeDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Logout" component={LogoutScreen} />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AuthProvider>
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Drawer" component={HomeDrawer} />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaView>
  );
}

export default App;