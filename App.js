import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import Catalog from './screens/Catalog';
import Usuario3D from './screens/Usuario3D';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Catalog" component={Catalog} />
        <Tab.Screen name="Usuario3D" component={Usuario3D} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
