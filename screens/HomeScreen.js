import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a Mi App Ropa</Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Catalog')}>
        <Text style={styles.buttonText}>Ver Catálogo</Text>
      </TouchableOpacity>

      <Image 
        source={{uri: 'https://placeimg.com/300/200/fashion'}}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  button: {
    backgroundColor: '#FF6F61',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginTop: 20,
  },
});

