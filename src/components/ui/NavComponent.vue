<template>
  <nav>
    <ul>
      <li>
        <a @click="scrollToSection('about')">About</a>
      </li>
      <li>
        <a @click="scrollToSection('work')">Projects</a>
      </li>
      <li>
        <a @click="scrollToSection('resume')">Resume</a>
      </li>
      <!-- <li>
        <a @click="scrollToSection('contact')">Contact</a>
      </li> -->
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { scrollMixin } from "@/mixins/anchorMixin";

export default defineComponent({
  name: "NavComponent",
  mixins: [scrollMixin],
});
</script>

<style scoped lang="scss">
nav {
  position: fixed;
  right: 0;
  padding: 0 20px;
  z-index: 3;
  @media #{$md} {
    padding: 0 10px;
  }
  @media only screen and (max-width: 400px) {
    right: unset;
    left: 50%;
    transform: translateX(-50%);
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    column-gap: 20px;
    @media #{$sm} {
      column-gap: 10px;
    }
  }
  a {
    display: block;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    background-color: #000;
    border: 1px solid #fff;
    padding: 2px 18px;
    transition: all 0.3s ease;
    font-size: 1rem;
    line-height: 2rem;
    &:hover {
      color: #000;
      background-color: #fff;
      border-color:#000;
    }
  }
}
</style>
