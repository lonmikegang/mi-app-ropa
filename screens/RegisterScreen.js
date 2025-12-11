import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.ibb.co/2dQY1Gn/banner.png' }} // Banner de ejemplo
        style={styles.banner}
        resizeMode="cover"
      />
      <Text style={styles.title}>Bienvenido</Text>
      <Text style={styles.subtitle}>Regístrate para continuar</Text>

      {/* Botón Google */}
      <TouchableOpacity style={[styles.button, styles.google]} onPress={() => alert('Google Sign In')}>
        <Ionicons name="logo-google" size={24} color="#fff" style={{ marginRight: 10 }} />
        <Text style={styles.buttonText}>Continuar con Google</Text>
      </TouchableOpacity>

      {/* Botón Apple */}
      <TouchableOpacity style={[styles.button, styles.apple]} onPress={() => alert('Apple Sign In')}>
        <Ionicons name="logo-apple" size={24} color="#fff" style={{ marginRight: 10 }} />
        <Text style={styles.buttonText}>Continuar con Apple</Text>
      </TouchableOpacity>

      {/* Botón Número de celular */}
      <TouchableOpacity style={[styles.button, styles.phone]} onPress={() => alert('Número de Celular')}>
        <Ionicons name="call" size={24} color="#fff" style={{ marginRight: 10 }} />
        <Text style={styles.buttonText}>Registrarse con Número de Celular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', paddingTop: 60 },
  banner: { width: '90%', height: 150, borderRadius: 12, marginBottom: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#555', marginBottom: 30 },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    marginVertical: 10,
  },
  google: { backgroundColor: '#DB4437' },
  apple: { backgroundColor: '#000000' },
  phone: { backgroundColor: '#4285F4' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
