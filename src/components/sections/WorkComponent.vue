<template>
  <div id="work">
    <MarqueeComponent
      text="&nbsp; VF Corporation | Vans | The North Face | Timberland | David & Goliath | Kia Motors America | CA Lottery | Jack in the Box | US Forest Services | Jollibee | Stacy's Pita Chips | Chicken of the Sea | Today, I'm Brave | Who What Wear | Marie Claire | VF Corporation | Vans | The North Face | Timberland | David & Goliath | Kia Motors America | CA Lottery | Jack in the Box | US Forest Services | Jollibee | Stacy's Pita Chips | Chicken of the Sea | Today, I'm Brave | Who What Wear | Marie Claire | "
      rotation="-3"
    />
    <div class="work-content">
      <h2>Projects</h2>
      <ClientList />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MarqueeComponent from "@/components/ui/MarqueeComponent.vue";
import ClientList from "@/components/ui/ClientList.vue";

export default defineComponent({
  name: "WorkComponent",
  components: {
    MarqueeComponent,
    ClientList,
  },
});
</script>

<style scoped lang="scss">
#work {
  .work-content {
    padding: 50px 0;
    @media #{$sm} {
      padding: 0 0 30px 0;
    }
    h2 {
      font-size: 60px;
      line-height: 66px;
      letter-spacing: -1.2px;
      max-width: $content-width;
      margin: 30px auto 10px auto;
      pointer-events: none;
      @media #{$md} {
        padding: 0 10px;
      }
    }
  }
}
</style>
