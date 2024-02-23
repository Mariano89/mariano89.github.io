<template>
  <div class="home">
    <HeaderComponent />
    <AboutComponent />
    <WorkComponent />
    <ResumeComponent />
    <!-- <ContactComponent /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "@/components/ui/HeaderComponent.vue"; // @ is an alias to /src
import AboutComponent from "@/components/sections/AboutComponent.vue";
import WorkComponent from "@/components/sections/WorkComponent.vue";
import ResumeComponent from "@/components/sections/ResumeComponent.vue";
// import ContactComponent from "@/components/sections/ContactComponent.vue";

export default defineComponent({
  // name: "HomeView",
  components: {
    HeaderComponent,
    AboutComponent,
    WorkComponent,
    ResumeComponent,
    // ContactComponent,
  },
});
</script>

<!-- <style scoped>
</style> -->
