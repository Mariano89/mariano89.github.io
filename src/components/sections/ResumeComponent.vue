<template>
  <div id="resume">
    <MarqueeComponent
      text="&nbsp;Resume | Resume | Resume | Resume | Resume | Resume | Resume | Resume | Resume | Resume | Resume | Resume | Resume | Resume | Resume | Resume | Resume | Resume | Resume | Resume | Resume | Resume | Resume | Resume | Resume | Resume | Resume | Resume | Resume | Resume | "
      rotation="3"
    />
    <div class="resume-content">
      <a :href="resumePdf" target="_blank">
        <img class="resume-image" :src="resumeJpg" alt="Mariano Echegoyen's Resume">
      </a>
      <a class="resume-link link" :href="resumePdf" target="_blank" download>Download Resume</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MarqueeComponent from "@/components/ui/MarqueeComponent.vue";
export default defineComponent({
  name: "ResumeComponent",
  components: {
    MarqueeComponent,
  },
  data() {
    return {
      resumePdf: "https://mariano-portfolio.s3.us-west-1.amazonaws.com/mariano-echegoyen-resume-2-linkedin-only.pdf",
      resumeJpg: "https://mariano-portfolio.s3.us-west-1.amazonaws.com/mariano-echegoyen-resume-2-linkedin-only.jpg",
    };
  },
});
</script>

<style scoped lang="scss">
.resume-content {
  padding: 0 20px;
  max-width: 1024px;
  margin: 0 auto;
  @media #{$md} {
    padding: 0 10px;
  }
  a {
    display: block;
  }
}
.resume-image {
  width: 100%;
  height: auto;
  border: 1px solid #000;
}
.resume-link {
  line-height: 1.3;
}
</style>
