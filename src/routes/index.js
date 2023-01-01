import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Game from '../screens/jogo';
import SplashScreen from '../screens/splash';



const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{gestureEnabled:false, headerTransparent: true, headerShown: false, title: "" }} />
        <Stack.Screen name="Home" component={Home} options={{gestureEnabled:false, headerTransparent: true, headerShown: false, title: "" }}/>
        <Stack.Screen name="Game" component={Game} options={{gestureEnabled:false, headerTransparent: true, headerShown: false, title: "" }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;