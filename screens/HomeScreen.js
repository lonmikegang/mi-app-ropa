import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BIENVENIDO A GOTTEOSHOP</Text>
      <Image 
        source={{ uri: 'https://i.postimg.cc/k4PNzvGb/download.jpg' }} 
        style={styles.banner} 
      />
      <Text style={styles.subtitle}>Explora nuestra colección de productos exclusivos</Text>
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  banner: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#555',
  },
});
