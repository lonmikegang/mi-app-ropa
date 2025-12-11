import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Cliente</Text>

      {/* Botón de prueba */}
      <Button
        title="Continuar con Login de Prueba"
        onPress={() => navigation.replace('Home')}
      />

      <Text style={styles.note}>
        ⚠️ Este es un login simulado para pruebas de la app. OAuth real se añadirá luego.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  note: { marginTop: 20, fontSize: 12, color: 'gray', textAlign: 'center' },
});
