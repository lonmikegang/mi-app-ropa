import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

// Screens
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import Catalog from './screens/Catalog';
import ProductDetail from './screens/ProductDetail';
import Usuario3D from './screens/Usuario3D';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigator (menú inferior)
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Home') {
            return <FontAwesome5 name="home" size={size} color={color} />;
          }
          if (route.name === 'Catalog') {
            return <MaterialIcons name="storefront" size={size} color={color} />;
          }
          if (route.name === 'Usuario3D') {
            return <FontAwesome5 name="user" size={size} color={color} />;
          }
          return null;
        },
        tabBarActiveTintColor: '#FF6347',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Catalog" component={Catalog} />
      <Tab.Screen name="Usuario3D" component={Usuario3D} />
    </Tab.Navigator>
  );
}

// Stack Navigator con Register como inicial y ProductDetail fuera de las tabs
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
