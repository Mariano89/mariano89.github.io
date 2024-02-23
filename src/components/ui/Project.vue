<template>
  <div class="project">
    <h3>{{ project.name }}</h3>
    <p>{{ project.description }}</p>
    <div class="image-grid">
      <div v-for="(image, index) in project.images" 
        :key="index" 
        :style="{ backgroundImage: `url(${image})` }"
        @click="$emit('show-lightbox', { images: project.images, index: index })"
      ></div>
    </div>
    <div v-if="project.link" class="link-container">
      <a class="link" :href="project.link" target="_blank">View Project</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    project: {
      type: Object as PropType<{ 
        name: string;
        description: string;
        link?: string; 
        images?: string[];
      }>,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.project {
  width: 100%;
  max-width: $content-width;
  margin: 0 auto;
  @media #{$md} {
    padding: 0 20px;
  }
  h3, p, .link-container {
    color: #000;
    max-width: $content-width;
    margin: 10px auto;
    text-align: left;
    line-height: 1.3;
  }
  p {
    font-family: sans-serif;
    font-size: 1.1rem;
  }
  .image-grid {
    max-width: $content-width;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin: 0 auto;
    overflow: hidden;
    div {
      width: 100%;
      height: 250px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: 105%;
      cursor: pointer;
      transition: background-size 0.3s ease-in-out;
      &:hover {
        background-size: 100%;
      }
      @media #{$sm} {
        height: 150px;
      }
    }
  }
}
</style>
