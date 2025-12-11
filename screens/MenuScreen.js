import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function MenuScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const currentRoute = route.name;

  // Función para definir el color del icono activo
  const getColor = (routeName) => (currentRoute === routeName ? '#FF6347' : 'black');

  return (
    <View style={styles.menu}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <FontAwesome5 name="home" size={24} color={getColor('Home')} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Catalog')}>
        <MaterialIcons name="storefront" size={24} color={getColor('Catalog')} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <FontAwesome5 name="shopping-cart" size={24} color={getColor('Cart')} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <FontAwesome5 name="user" size={24} color={getColor('Profile')} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
  },
});
