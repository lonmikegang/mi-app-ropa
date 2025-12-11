// /screens/Usuario3D.js
import React, { useRef, useEffect } from "react";
import { View, FlatList, TouchableOpacity, Image, Text } from "react-native";
import { GLView } from "expo-gl";
import * as THREE from "three";
import { Renderer } from "expo-three";
import { GLTFLoader, DRACOLoader } from "three-stdlib";

// Simulación de productos del carrito
const productosCarrito = [
  { id: "1", nombre: "Polo Negro", thumb: require("../assets/images/polo_nuevo.png") },
  { id: "2", nombre: "Polo Rojo", thumb: require("../assets/images/polo_rojo.png") },
  { id: "3", nombre: "Polo Azul", thumb: require("../assets/images/polo_azul.png") },
];

export default function Usuario3D() {
  const avatarUrl = "https://models.readyplayer.me/693b1683f4c2fe193afb1ecd.glb";
  const glRef = useRef();
  const avatarRef = useRef();

  useEffect(() => {
    let mounted = true;

    const initThree = async () => {
      const gl = glRef.current;
      if (!gl) return;

      const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;
      const scene = new THREE.Scene();

      // --- Cámara ---
      const camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 1000);
      camera.position.set(0, 1.6, 3);

      // --- Renderer ---
      const renderer = new Renderer({ gl });
      renderer.setSize(width, height);
      renderer.setClearColor("#000000");

      // --- Luces ---
      scene.add(new THREE.AmbientLight(0xffffff, 1.2));

      const dir1 = new THREE.DirectionalLight(0xffffff, 0.8);
      dir1.position.set(5, 10, 7.5);
      scene.add(dir1);

      const dir2 = new THREE.DirectionalLight(0xffffff, 0.5);
      dir2.position.set(-5, -10, -7.5);
      scene.add(dir2);

      scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 0.6));

      // --- Cargar avatar ---
      const loader = new GLTFLoader();
      const draco = new DRACOLoader();
      draco.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
      loader.setDRACOLoader(draco);

      try {
        const gltf = await loader.loadAsync(avatarUrl);
        const avatar = gltf.scene;
        avatar.scale.set(0.8, 0.8, 0.8);
        avatar.position.set(0, -0.2, 0); // centrado
        scene.add(avatar);
        avatarRef.current = avatar;
        console.log("Avatar cargado");
      } catch (e) {
        console.log("Error cargando avatar:", e);
      }

      // --- Animación ---
      const animate = () => {
        if (!mounted) return;
        requestAnimationFrame(animate);
        if (avatarRef.current) avatarRef.current.rotation.y += 0.002;
        renderer.render(scene, camera);
        gl.endFrameEXP();
      };
      animate();
    };

    initThree();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#000000" }}>
      {/* GLView para avatar */}
      <GLView
        style={{ flex: 1 }}
        onContextCreate={(gl) => {
          glRef.current = gl;
        }}
      />

      {/* Barra de selección de prendas debajo */}
      <View style={{ height: 120, backgroundColor: "#111", paddingVertical: 10 }}>
        <FlatList
          horizontal
          data={productosCarrito}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                console.log("Seleccionado:", item.nombre);
                // Aquí más adelante se podrá poner lógica de probar el polo
              }}
              style={{
                marginHorizontal: 10,
                borderWidth: 0,
                borderColor: "yellow",
                borderRadius: 8,
                overflow: "hidden",
              }}
            >
              <Image
                source={item.thumb}
                style={{ width: 80, height: 80 }}
                resizeMode="contain"
              />
              <Text style={{ color: "white", textAlign: "center", fontSize: 12 }}>
                {item.nombre}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
