import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import Home from './src/pages/Home';
import Body from './src/components/Body';
import Detalhes from './src/pages/Detalhes';

const Stack = createStackNavigator();

export default function App() {
 

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Body" component={Body}  options={{ headerShown: false }}/>
        <Stack.Screen name="Detalhes" component={Detalhes} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
      );
    }

