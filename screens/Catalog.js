import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const productos = [
  {
    id: '1',
    nombre: 'Camiseta Negra',
    precio: 'S/ 59',
    imagen: 'https://link-de-tu-imagen.com/camiseta-negra.jpg',
    tallas: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '2',
    nombre: 'Pantalón Jeans',
    precio: 'S/ 120',
    imagen: 'https://link-de-tu-imagen.com/jeans.jpg',
    tallas: ['28', '30', '32', '34'],
  },
];

export default function Catalog({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={productos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.producto}
            onPress={() => navigation.navigate('ProductDetail', { producto: item })}
          >
            <Image source={{ uri: item.imagen }} style={styles.imagen} />
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text style={styles.precio}>{item.precio}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  producto: {
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#f8f8f8',
    padding: 10,
  },
  imagen: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  precio: {
    fontSize: 16,
    color: 'green',
  },
});
