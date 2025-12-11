import React from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView, Alert } from 'react-native';

export default function ProductDetail({ route }) {
  const { producto } = route.params || {};

  if (!producto) {
    return (
      <View style={styles.center}>
        <Text>No se encontró el producto</Text>
      </View>
    );
  }

  const handleAddToCart = () => {
    Alert.alert('Éxito', 'Producto agregado al carrito!');
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: producto.imagen }} style={styles.imagen} />
      <Text style={styles.nombre}>{producto.nombre}</Text>
      <Text style={styles.precio}>${Number(producto.precio).toFixed(2)}</Text>

      <Text style={styles.titulo}>Selecciona la talla:</Text>
      <View style={styles.tallas}>
        {(producto.tallas || []).map((talla) => (
          <View key={talla} style={{ marginRight: 8 }}>
            <Button title={talla} onPress={() => Alert.alert('Talla', `Talla ${talla} seleccionada`)} />
          </View>
        ))}
      </View>

      <View style={{ marginTop: 20 }}>
        <Button title="Agregar al carrito" onPress={handleAddToCart} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  imagen: { width: '100%', height: 300, resizeMode: 'cover', marginBottom: 20, borderRadius: 10 },
  nombre: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  precio: { fontSize: 18, color: 'green', marginBottom: 20 },
  titulo: { fontSize: 16, marginBottom: 10 },
  tallas: { flexDirection: 'row', marginBottom: 20 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
