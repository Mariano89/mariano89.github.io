<template>
  <Vue3Marquee 
    :duration="50" 
    :pauseOnHover="true"
    :style="{ transform: `translateX(-50%) rotate(${rotation}deg)`}"
  >
    {{ text }}
  </Vue3Marquee>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MarqueeComponent",
  props: {
    text: String,
    rotation: String,
  },
});
</script>

<style scoped lang="scss">
.vue3-marquee {
  background-color: #000;
  color: #fff;
  padding: 5px 0;
  // margin: 0 40px;
  letter-spacing: 1px;
  left: 50%;
  width: 105%;
  overflow: hidden;
  white-space: nowrap;
  &.horizontal {
    width: 105%;
  }
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
