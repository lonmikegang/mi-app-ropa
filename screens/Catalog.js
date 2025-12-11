import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const productos = [
  {
    id: 1,
    nombre: 'Camiseta Negra',
    precio: 49.99,
    imagen: 'https://i.ibb.co/0Jmshvb/camiseta-negra.jpg',
  },
  {
    id: 2,
    nombre: 'Zapatillas Blancas',
    precio: 129.99,
    imagen: 'https://i.ibb.co/2t5WZVt/zapatillas-blancas.jpg',
  },
  {
    id: 3,
    nombre: 'Gorra Azul',
    precio: 29.99,
    imagen: 'https://i.ibb.co/8M5R7zC/gorra-azul.jpg',
  },
];

export default function Catalog() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Catálogo de Productos</Text>
      {productos.map((prod) => (
        <TouchableOpacity key={prod.id} style={styles.producto}>
          <Image source={{ uri: prod.imagen }} style={styles.imagen} />
          <Text style={styles.nombre}>{prod.nombre}</Text>
          <Text style={styles.precio}>${prod.precio}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
  },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  producto: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 8,
    width: 200,
    alignItems: 'center',
  },
  imagen: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginBottom: 5,
  },
  nombre: { fontSize: 16, fontWeight: 'bold' },
  precio: { fontSize: 14, color: '#555' },
});

