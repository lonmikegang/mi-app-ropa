import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bienvenido a mi Tienda</Text>

      <Button
        title="Ir al Registro"
        onPress={() => alert('Pantalla de registro en construcción')}
      />

      <TouchableOpacity
        style={styles.botonCatalog}
        onPress={() => navigation.navigate('Catalog')}
      >
        <Text style={styles.textoBoton}>Ver Catálogo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  botonCatalog: {
    marginTop: 20,
    backgroundColor: '#ff3b30',
    padding: 15,
    borderRadius: 10,
  },
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
