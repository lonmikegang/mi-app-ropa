// Usuario3D.js  (REEMPLAZA TODO ESTE ARCHIVO)

import React from "react";
import { View } from "react-native";
import { GLView } from "expo-gl";
import * as THREE from "three";
import { Renderer } from "expo-three";
import { GLTFLoader, DRACOLoader } from "three-stdlib";
import { Asset } from "expo-asset";

import "expo-three/build/ExpoTHREE";

export default function Usuario3D() {
  const avatarUrl =
    "https://models.readyplayer.me/693b1683f4c2fe193afb1ecd.glb";

  return (
    <View style={{ flex: 1 }}>
      <GLView
        style={{ flex: 1, backgroundColor: "#ffffff" }}
        onContextCreate={async (gl) => {
          const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;

          const scene = new THREE.Scene();
          const camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 1000);
          camera.position.set(0, 1.6, 3);

          const renderer = new Renderer({ gl });
          renderer.setSize(width, height);
          renderer.setClearColor("#ffffff");

          const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 1.6);
          scene.add(hemi);
          const dir = new THREE.DirectionalLight(0xffffff, 0.8);
          dir.position.set(5, 10, 7.5);
          scene.add(dir);

          const loader = new GLTFLoader();
          const draco = new DRACOLoader();
          draco.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
          loader.setDRACOLoader(draco);

          // --- CARGAR AVATAR ---
          let avatar = null;
          try {
            const gltf = await loader.loadAsync(avatarUrl);
            avatar = gltf.scene;
            avatar.scale.set(1.1, 1.1, 1.1);
            avatar.position.y = -1.5;
            scene.add(avatar);
          } catch (e) {
            console.log("Error cargando avatar:", e);
          }

          // --- CARGAR POLO LOCAL ---
          try {
            const poloAsset = Asset.fromModule(
              require("../assets/models/polo_nuevo.glb")
            );
            await poloAsset.downloadAsync();

            const poloGltf = await loader.loadAsync(poloAsset.localUri);
            const polo = poloGltf.scene;

            polo.scale.set(1, 1, 1);
            polo.position.set(0, 0.15, 0);

            // si hay avatar → colgar el polo sobre su jerarquía
            if (avatar) {
              avatar.add(polo);
            } else {
              scene.add(polo);
            }
          } catch (e) {
            console.log("Error cargando polo:", e);
          }

          const animate = () => {
            requestAnimationFrame(animate);
            if (avatar) avatar.rotation.y += 0.002;
            renderer.render(scene, camera);
            gl.endFrameEXP();
          };

          animate();
        }}
      />
    </View>
  );
}

