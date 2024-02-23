<template>
  <a :href="url" :class="className" :title="title" target="_blank" rel="noopener noreferrer">
    <svg :viewBox="viewBox" xmlns="http://www.w3.org/2000/svg" class="icon-svg" :style="style">
      <path :d="path" />
    </svg>
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IconComponent",
  props: {
    className: String,
    url: String,
    title: String,
    viewBox: String,
    path: String,
    style: [String, Object] as any,
  },
});
</script>

<style scoped lang="scss">
a {
  width: 36px;
  height: 36px;
  position: relative;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  &:hover {
    color: white;
    background-color: black;
    & .icon-svg {
      fill: white;
    }
  }
}
.icon-svg {
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
}
</style>
