import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const productos = [
  {
    id: 1,
    nombre: 'Camiseta Negra',
    precio: 49.99,
    imagen: 'https://i.ibb.co/0Jmshvb/camiseta-negra.jpg',
    tallas: ['S', 'M', 'L'],
  },
  {
    id: 2,
    nombre: 'Zapatillas Blancas',
    precio: 129.99,
    imagen: 'https://i.ibb.co/2t5WZVt/zapatillas-blancas.jpg',
    tallas: ['40', '41', '42', '43'],
  },
  {
    id: 3,
    nombre: 'Gorra Azul',
    precio: 29.99,
    imagen: 'https://i.ibb.co/8M5R7zC/gorra-azul.jpg',
    tallas: ['Única'],
  },
];

export default function Catalog() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Catálogo de Productos</Text>
      <View style={styles.grid}>
        {productos.map((prod) => (
          <TouchableOpacity
            key={prod.id}
            style={styles.producto}
            onPress={() => navigation.navigate('ProductDetail', { producto: prod })}
          >
            <Image source={{ uri: prod.imagen }} style={styles.imagen} />
            <Text style={styles.nombre}>{prod.nombre}</Text>
            <Text style={styles.precio}>${prod.precio.toFixed(2)}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  producto: {
    margin: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 8,
    width: 160,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imagen: {
    width: 140,
    height: 140,
    borderRadius: 8,
    marginBottom: 8,
  },
  nombre: { fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
  precio: { fontSize: 14, color: '#555', marginTop: 4 },
});
