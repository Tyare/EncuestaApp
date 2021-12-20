import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {Resultado} from './src/screens/Resultado';
import {AcercaDe} from './src/screens/Acerca';
import {Home} from './src/screens/Home';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Encuesta 3IT" component={Home} />
        <Drawer.Screen name="Resultado" component={Resultado} />
        <Drawer.Screen name="Acerca de" component={AcercaDe} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
