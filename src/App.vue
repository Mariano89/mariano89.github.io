<template>
  <div class="app-container">
    <NavComponent />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavComponent from "@/components/ui/NavComponent.vue";

export default defineComponent({
  // name: "HomeView",
  components: {
    NavComponent,
  },
});
</script>

<style lang="scss">
#app {
  // font-family: "Press Start 2P";
  cursor: crosshair;
  font-family: "Bungee", sans-serif;
  font-weight: 400;
  font-style: normal;
  overflow-x: hidden;
  // -webkit-user-select: none;  /* Chrome, Safari and Opera */
  // -moz-user-select: none;     /* Firefox */
  // -ms-user-select: none;      /* IE/Edge */
  // user-select: none; 
  .app-container {
    padding: 20px 0 40px 0;
  }
}
</style>
