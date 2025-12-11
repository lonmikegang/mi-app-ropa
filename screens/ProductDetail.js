import React from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView } from 'react-native';

export default function ProductDetail({ route }) {
  const { producto } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: producto.imagen }} style={styles.imagen} />
      <Text style={styles.nombre}>{producto.nombre}</Text>
      <Text style={styles.precio}>{producto.precio}</Text>

      <Text style={styles.titulo}>Selecciona la talla:</Text>
      <View style={styles.tallas}>
        {producto.tallas.map((talla) => (
          <Button key={talla} title={talla} onPress={() => alert(`Talla ${talla} seleccionada`)} />
        ))}
      </View>

      <Button
        title="Agregar al carrito"
        onPress={() => alert('Producto agregado al carrito!')}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  imagen: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 20,
    borderRadius: 10,
  },
  nombre: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  precio: {
    fontSize: 18,
    color: 'green',
    marginBottom: 20,
  },
  titulo: {
    fontSize: 16,
    marginBottom: 10,
  },
  tallas: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});
