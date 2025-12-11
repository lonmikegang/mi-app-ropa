import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import Catalog from './screens/Catalog';
import Usuario3D from './screens/Usuario3D';
import MenuScreen from './screens/MenuScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
            else if (route.name === 'Catalog') iconName = focused ? 'cart' : 'cart-outline';
            else if (route.name === 'Usuario3D') iconName = focused ? 'person' : 'person-outline';
            else if (route.name === 'Menu') iconName = focused ? 'menu' : 'menu-outline';
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Catalog" component={Catalog} />
        <Tab.Screen name="Usuario3D" component={Usuario3D} />
        <Tab.Screen name="Menu" component={MenuScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
