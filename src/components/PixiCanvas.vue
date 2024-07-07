<template>
    <div ref="pixiContainer"></div>
  </template>
  
  <script>
  import { defineComponent, onMounted, ref } from 'vue';
  import * as PIXI from 'pixi.js';
  
  export default defineComponent({
    name: 'PixiCanvas',
    setup() {
      const pixiContainer = ref(null);
  
      onMounted(() => {
        const app = new PIXI.Application({
          width: 800,
          height: 600,
          backgroundColor: 0x1099bb,
        });
  
        pixiContainer.value.appendChild(app.view);
  
        // Ejemplo: añadir un sprite
        PIXI.Assets.load('https://pixijs.com/assets/bunny.png').then((texture) => {
          const bunny = new PIXI.Sprite(texture);
          bunny.x = app.renderer.width / 2;
          bunny.y = app.renderer.height / 2;
          bunny.anchor.set(0.5);
  
          app.stage.addChild(bunny);
        });
      });
  
      return {
        pixiContainer,
      };
    },
  });
  </script>
  
  <style scoped>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  </style>
  