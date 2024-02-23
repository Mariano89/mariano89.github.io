<template>
  <div id="about">
    <MarqueeComponent
      text="&nbsp;Mariano Echegoyen | Full-stack Web Developer | Game Developer | Mariano Echegoyen | Full-stack Web Developer | Game Developer | Mariano Echegoyen | Full-stack Web Developer | Game Developer | Mariano Echegoyen | Full-stack Web Developer | Game Developer | "
      rotation="3"
    />
    <div class="about-content">
      <p>
        Over the past decade, I've been deeply immersed in the world of full-stack web development, crafting an array of exciting projects for the digital realm. From sleek web apps to user-friendly interfaces, I've had the pleasure of bringing ideas to life across various platforms.
        <br><br>
        While honing my skills in web development, I've also had the chance to dabble in creating web-based games for big names like California Lottery and Vans. It's been a blast blending code with creativity to deliver engaging experiences.
        <br><br>
        You'll find a glimpse of my journey and <a class="anchor link" @click="scrollToSection('work')">projects here</a>. Scroll down, click around, and explore some of my work. From innovative web applications to captivating games, there's plenty to discover.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { scrollMixin } from "@/mixins/anchorMixin";
import MarqueeComponent from "@/components/ui/MarqueeComponent.vue";

export default defineComponent({
  name: "AboutComponent",
  mixins: [scrollMixin],
  components: {
    MarqueeComponent,
  },
});
</script>

<style scoped lang="scss">
#about {
  .about-content {
    padding: 30px 0;
    p {
      font-size: 20px;
      line-height: 28px;
      text-align: left;
      max-width: $content-width;
      margin: 0 auto;
      padding: 0 20px;
      z-index: 1;
      .anchor {
        position: relative;
        z-index: 2;
      }
    }
  }
}
</style>
