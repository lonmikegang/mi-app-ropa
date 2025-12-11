import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Banner */}
      <Image
        source={{ uri: 'https://i.ibb.co/0Jmshvb/camiseta-negra.jpg' }}
        style={styles.banner}
        resizeMode="cover"
      />

      <Text style={styles.title}>Bienvenido a Mi App</Text>
      <Text style={styles.subtitle}>Explora nuestros productos y ofertas</Text>

      {/* Barra de navegación abajo */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="home-outline" size={30} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Catalog')}>
          <Icon name="cart-outline" size={30} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert('Usuario 3D')}>
          <Icon name="person-outline" size={30} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert('Menú')}>
          <Icon name="menu-outline" size={30} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 50, alignItems: 'center' },
  banner: { width: '100%', height: 200, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#555', marginBottom: 20 },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    position: 'absolute',
    bottom: 20,
    paddingHorizontal: 30,
  },
});
