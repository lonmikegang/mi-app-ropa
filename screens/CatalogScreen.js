import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const products = [
  { id: '1', name: 'Camisa Roja', price: 29.99, image: 'https://via.placeholder.com/150/FF0000' },
  { id: '2', name: 'Pantalón Azul', price: 49.99, image: 'https://via.placeholder.com/150/0000FF' },
  { id: '3', name: 'Chaqueta Negra', price: 79.99, image: 'https://via.placeholder.com/150/000000' },
];

export default function CatalogScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => alert(`Seleccionaste: ${item.name}`)}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catálogo de Ropa</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 10 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  list: { paddingBottom: 20 },
  card: { backgroundColor: '#f5f5f5', padding: 10, borderRadius: 8, marginBottom: 10, alignItems: 'center' },
  image: { width: 150, height: 150, marginBottom: 5 },
  name: { fontSize: 18, fontWeight: '500' },
  price: { fontSize: 16, color: '#333' },
});
