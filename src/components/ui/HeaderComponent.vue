<template>
  <header>
    <div class="title-container">
      <h1>Mariano</h1>
    </div>
    <ul>
      <li>
        <IconComponent
          className="linkedin-icon"
          url="https://www.linkedin.com/in/marianoechegoyen/"
          title="LinkedIn"
          viewBox="0 0 16 16"
          path="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
          :style="{ borderRadius: '6px' }"
          />
      </li>
      <li>
        <IconComponent
          className="github-icon"
          url="https://github.com/Mariano89"
          title="Github"
          viewBox="0 0 1536 1536"
          path="M519 1072q4-6-3-13q-9-7-14-2q-4 6 3 13q9 7 14 2m-28-41q-5-7-12-4q-6 4 0 12q7 8 12 5q6-4 0-13m-41-40q2-4-5-8q-7-2-8 2q-3 5 4 8q8 2 9-2m21 23q2-1 1.5-4.5t-3.5-5.5q-6-7-10-3t1 11q6 6 11 2m86 75q2-7-9-11q-9-3-13 4q-2 7 9 11q9 3 13-4m42 3q0-8-12-8q-10 0-10 8t11 8t11-8m39-7q-2-7-13-5t-9 9q2 8 12 6t10-10m642-317q0-212-150-362T768 256T406 406T256 768q0 167 98 300.5T606 1254q18 3 26.5-5t8.5-20q0-52-1-95q-6 1-15.5 2.5t-35.5 2t-48-4t-43.5-20T468 1073q-23-59-57-74q-2-1-4.5-3.5l-8-8l-7-9.5l4-7.5L415 967q6 0 15 2t30 15.5t33 35.5q16 28 37.5 42t43.5 14t38-3.5t30-9.5q7-47 33-69q-49-6-86-18.5t-73-39t-55.5-76T441 741q0-79 53-137q-24-62 5-136q19-6 54.5 7.5T614 505l26 16q58-17 128-17t128 17q11-7 28.5-18t55.5-26t57-9q29 74 5 136q53 58 53 137q0 57-14 100.5t-35.5 70T992 956t-62.5 26t-68.5 12q35 31 35 95q0 40-.5 89t-.5 51q0 12 8.5 20t26.5 5q154-52 252-185.5t98-300.5m256-480v960q0 119-84.5 203.5T1248 1536H288q-119 0-203.5-84.5T0 1248V288Q0 169 84.5 84.5T288 0h960q119 0 203.5 84.5T1536 288"
        />
      </li>
    </ul>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IconComponent from "@/components/svg/IconComponent.vue";

export default defineComponent({
  name: "HeaderComponent",
  components: {
    IconComponent,
  },
});
</script>

<style scoped lang="scss">
header {
  padding: 0 20px;
  @media #{$md} {
    padding: 0 10px;
  }
  .title-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 50px 0 12px 0;
    h1 {
      font-size: 18vw;
      line-height: 15vw;
      font-weight: 400;
      white-space: nowrap;
      letter-spacing: -1.2vw;
      margin: 0;
    }
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    column-gap: 10px;
    .linkedin-icon {
      right: 1px;
    }
  }
}
</style>
