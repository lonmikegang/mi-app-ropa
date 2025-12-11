import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function RegisterScreen({ navigation }) {
  const handleRegister = () => {
    // Después de completar el registro, reemplazamos la pantalla por las tabs
    navigation.replace('MainTabs');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <Button title="Registrarse" onPress={handleRegister} />
      {/* Aquí luego puedes agregar botones de Google, Apple, etc. */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});
