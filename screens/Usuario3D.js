// /screens/Usuario3D.js
import React, { useRef } from "react";
import { View } from "react-native";
import { GLView } from "expo-gl";
import * as THREE from "three";
import { Renderer } from "expo-three";
import { GLTFLoader, DRACOLoader } from "three-stdlib";

export default function Usuario3D() {
  const avatarRef = useRef();
  const avatarUrl = "https://models.readyplayer.me/693b1683f4c2fe193afb1ecd.glb";

  return (
    <View style={{ flex: 1, backgroundColor: "#000000" }}>
      <GLView
        style={{ flex: 1 }}
        onContextCreate={async (gl) => {
          const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;
          const scene = new THREE.Scene();

          // --- Cámara ---
          const camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 1000);
          camera.position.set(0, 1.6, 3);

          // --- Renderer ---
          const renderer = new Renderer({ gl });
          renderer.setSize(width, height);
          renderer.setClearColor("#222222");

          // --- Luces ---
          scene.add(new THREE.AmbientLight(0xffffff, 1.2));
          const dir1 = new THREE.DirectionalLight(0xffffff, 0.8);
          dir1.position.set(5, 10, 7.5);
          scene.add(dir1);
          const dir2 = new THREE.DirectionalLight(0xffffff, 0.5);
          dir2.position.set(-5, -10, -7.5);
          scene.add(dir2);
          scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 0.6));

          // --- Cargar avatar remoto ---
          const loader = new GLTFLoader();
          const draco = new DRACOLoader();
          draco.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
          loader.setDRACOLoader(draco);

          try {
            const gltf = await loader.loadAsync(avatarUrl);
            const avatar = gltf.scene;
            avatar.scale.set(1, 1, 1);
            avatar.position.set(0, -0.5, 0); // centrado
            scene.add(avatar);
            avatarRef.current = avatar;
            console.log("Avatar cargado desde ReadyPlayerMe");
          } catch (e) {
            console.log("Error cargando avatar:", e);
          }

          // --- Animación ---
          const animate = () => {
            requestAnimationFrame(animate);
            if (avatarRef.current) avatarRef.current.rotation.y += 0.002;
            renderer.render(scene, camera);
            gl.endFrameEXP();
          };
          animate();
        }}
      />
    </View>
  );
}
