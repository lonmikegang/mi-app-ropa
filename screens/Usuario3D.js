import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Usuario3D() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Usuario 3D</Text>
      <Text>Aquí iría la vista del usuario en 3D.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
});
