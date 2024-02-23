import { defineComponent } from "vue";

export const scrollMixin = defineComponent({
  methods: {
    scrollToSection(sectionId: string): void {
      // Scroll to the specified section ID
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      // Update the browser's URL with the section ID as the hash
      history.pushState(null, "", sectionId);
    },
  },
});
