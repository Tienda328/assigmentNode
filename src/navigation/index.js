import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screen/login';
import HomeScreen from '../screen/home';
import EditScreen from '../screen/edit';

const HomeStack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator
        // initialRouteName="IndexLogin"
        initialRouteName="login"
        screenOptions={{
          headerShown: false,
        }}>
        {/* <HomeStack.Screen name="Botton-tabbar" component={HomeTabScreen} /> */}
        <HomeStack.Screen name="login" component={LoginScreen} />
        <HomeStack.Screen name="home" component={HomeScreen} />
        <HomeStack.Screen name="edit" component={EditScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
