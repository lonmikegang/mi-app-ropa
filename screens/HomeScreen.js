import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground 
      source={{uri: 'https://i.ibb.co/7QpKsCX/sample-background.jpg'}} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenido a Mi Tienda</Text>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Catalog')}
        >
          <Text style={styles.buttonText}>Ver Catálogo</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.buttonSecondary} 
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#ff5c5c',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonSecondary: {
    backgroundColor: '#ffa500',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
