import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Animated,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const productos = [
  { id: '1', nombre: 'Camiseta Negra', precio: 49.99, imagen: 'https://i.ibb.co/0Jmshvb/camiseta-negra.jpg', tallas: ['S', 'M', 'L'] },
  { id: '2', nombre: 'Zapatillas Blancas', precio: 129.99, imagen: 'https://i.ibb.co/2t5WZVt/zapatillas-blancas.jpg', tallas: ['40', '41', '42', '43'] },
  { id: '3', nombre: 'Gorra Azul', precio: 29.99, imagen: 'https://i.ibb.co/8M5R7zC/gorra-azul.jpg', tallas: ['Única'] },
  { id: '4', nombre: 'Polo Rojo', precio: 39.99, imagen: 'https://via.placeholder.com/150/FF0000', tallas: ['S', 'M', 'L'] },
  { id: '5', nombre: 'Chaqueta Gris', precio: 89.99, imagen: 'https://via.placeholder.com/150/808080', tallas: ['S', 'M', 'L'] },
  { id: '6', nombre: 'Camisa Blanca', precio: 59.99, imagen: 'https://via.placeholder.com/150/FFFFFF', tallas: ['S', 'M', 'L'] },
];

const screenWidth = Dimensions.get('window').width;
const cardMargin = 12;
const cardWidth = (screenWidth / 2) - cardMargin * 3;

export default function Catalog() {
  const animations = useRef(productos.map(() => new Animated.Value(0))).current;
  const [detalleProducto, setDetalleProducto] = useState(null);
  const [carrito, setCarrito] = useState([]);
  const [tallaSeleccionada, setTallaSeleccionada] = useState(null);
  const tallaAnim = useRef(new Animated.Value(1)).current;

  const animateItem = (index) => {
    Animated.timing(animations[index], {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const animarTalla = () => {
    Animated.sequence([
      Animated.timing(tallaAnim, { toValue: 1.2, duration: 100, useNativeDriver: true }),
      Animated.timing(tallaAnim, { toValue: 1, duration: 100, useNativeDriver: true }),
    ]).start();
  };

  const agregarAlCarrito = (producto) => {
    if (!tallaSeleccionada) return;
    setCarrito([...carrito, { ...producto, talla: tallaSeleccionada }]);
    alert(`Añadido: ${producto.nombre} (Talla: ${tallaSeleccionada})`);
  };

  const renderItem = ({ item, index }) => {
    const scale = animations[index].interpolate({ inputRange: [0,1], outputRange: [0.85,1] });
    const opacity = animations[index];

    return (
      <Animated.View style={{ transform: [{ scale }], opacity, marginBottom: 16 }}>
        <TouchableOpacity
          style={[styles.card, { width: cardWidth }]}
          activeOpacity={0.85}
          onPress={() => {
            setDetalleProducto(item);
            setTallaSeleccionada(item.tallas[0]);
          }}
          onPressIn={() => Animated.spring(animations[index], { toValue: 1.05, useNativeDriver: true }).start()}
          onPressOut={() => Animated.spring(animations[index], { toValue: 1, useNativeDriver: true }).start()}
        >
          <Image source={{ uri: item.imagen }} style={styles.image} />
          <Text style={styles.name}>{item.nombre}</Text>
          <Text style={styles.price}>${item.precio.toFixed(2)}</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  if (detalleProducto) {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => setDetalleProducto(null)}>
          <Ionicons name="arrow-back" size={28} color="#111" />
        </TouchableOpacity>
        <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
          <Image source={{ uri: detalleProducto.imagen }} style={styles.headerImage} />
          <View style={styles.detailInfo}>
            <Text style={styles.detailName}>{detalleProducto.nombre}</Text>
            <Text style={styles.detailPrice}>${detalleProducto.precio.toFixed(2)}</Text>

            {/* Selector de tallas minimalista tipo Kanye */}
            <View style={styles.sizesContainer}>
              {detalleProducto.tallas.map((talla) => (
                <TouchableOpacity
                  key={talla}
                  onPress={() => { setTallaSeleccionada(talla); animarTalla(); }}
                  style={{ marginHorizontal: 10 }}
                >
                  <Animated.Text
                    style={[
                      styles.sizeTextMinimal,
                      tallaSeleccionada === talla && styles.sizeTextSelectedMinimal,
                      tallaSeleccionada === talla && { transform: [{ scale: tallaAnim }] }
                    ]}
                  >
                    {talla}
                  </Animated.Text>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity style={styles.addButton} onPress={() => agregarAlCarrito(detalleProducto)}>
              <Text style={styles.addButtonText}>Añadir al carrito</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catálogo Premium</Text>
      <FlatList
        data={productos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ paddingBottom: 20, paddingHorizontal: cardMargin }}
        onViewableItemsChanged={({ viewableItems }) => { viewableItems.forEach(({ index }) => animateItem(index)); }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  title: { fontSize: 26, fontWeight: '700', marginVertical: 20, textAlign: 'center', color: '#111' },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
    padding: 12,
    ...Platform.select({
      ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.08, shadowRadius: 4 },
      android: { elevation: 3 },
    }),
  },
  image: { width: '100%', height: 160, borderRadius: 10, marginBottom: 10, resizeMode: 'cover' },
  name: { fontSize: 15, fontWeight: '600', color: '#222', textAlign: 'center' },
  price: { fontSize: 14, color: '#777', marginTop: 2, fontWeight: '600' },
  backButton: {
    padding: 12,
    position: 'absolute',
    top: 40,
    left: 16,
    zIndex: 10,
    backgroundColor: '#fff',
    borderRadius: 24,
    ...Platform.select({
      ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 3 },
      android: { elevation: 4 },
    }),
  },
  headerImage: { width: '100%', height: 350, resizeMode: 'cover' },
  detailInfo: { padding: 20, alignItems: 'center' },
  detailName: { fontSize: 24, fontWeight: '700', color: '#111', marginBottom: 8, textAlign: 'center' },
  detailPrice: { fontSize: 22, color: '#555', marginBottom: 16 },
  sizesContainer: { flexDirection: 'row', justifyContent: 'center', marginBottom: 24 },
  sizeTextMinimal: { fontSize: 18, color: '#555', fontWeight: '500' },
  sizeTextSelectedMinimal: { color: '#FF6347', fontWeight: '700' },
  addButton: { backgroundColor: '#FF6347', paddingVertical: 14, paddingHorizontal: 30, borderRadius: 25 },
  addButtonText: { color: '#fff', fontWeight: '700', fontSize: 16 },
});
