<template>
  <div id="client-list">
    <div class="client-container" v-for="(client, index) in clients" :key="index">
      <div class="client-name" @click="toggleClient(index)">
        <div class="client-content">
          <p>{{ client.name }}</p>
          <div class="arrow" :class="{ 'open' : client.isOpen }">&#10005;</div>
        </div>
      </div>
      <div
        ref="clientProjects"
        :class="{ 'client-project': true, open: client.isOpen }"
        :style="{ 'max-height': client.isOpen ? `${client.maxHeight}px` : '0' }"
      >
        <carousel
          v-if="client.projects.length > 1"
          :wrapAround="true"
        >
          <slide v-for="(project, index) in client.projects" :key="index">
            <Project :project="project" @show-lightbox="showLightbox" />
          </slide>
          
          <template #addons>
            <pagination />
            <navigation />
          </template>
        </carousel>

        <Project 
          v-else
          :project="client.projects[0]" 
          @show-lightbox="showLightbox" 
        />
        
        <vue-easy-lightbox
          :visible="visible"
          :imgs="lightboxImages"
          :index="lightboxIndex"
          :loop="true"
          :zoomDisabled="true"
          :rotateDisabled="true"
          :moveDisabled="true"
          @hide="hideLightbox"
        ></vue-easy-lightbox>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, nextTick } from "vue";
import Project from "./Project.vue";
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import VueEasyLightbox from "vue-easy-lightbox";
import { clientsData } from "@/data/data";

export default defineComponent({
  components: {
    Project,
    Carousel,
    Slide,
    Pagination,
    Navigation,
    VueEasyLightbox,
  },
  setup() {
    const clients = ref(clientsData.map(client => ({ ...client, isOpen: false, maxHeight: "0" })));
    const clientProjects = ref<HTMLElement[]>([]);

    const lightboxImages = ref<string[]>([]);
    const lightboxIndex = ref(0);
    const visible = ref(false);
    const scrollPosition = ref(0);

    const toggleClient = async (index: number) => {
      clients.value.forEach((client, i) => {
        if(i !== index) {
          client.isOpen = false;
        }
      });
      clients.value[index].isOpen = !clients.value[index].isOpen;

      await nextTick();
      if(clientProjects.value[index]) {
        clients.value[index].maxHeight = clientProjects.value[index]?.scrollHeight.toString();
      }
    };

    onMounted(() => {
      if(clientProjects.value) {
        clients.value.forEach((client, index) => {
          client.maxHeight = clientProjects.value[index]?.scrollHeight.toString();
        });
      }
    });
    
    const showLightbox = (payload: { images: string[], index: number }) => {
      lightboxImages.value = payload.images;
      lightboxIndex.value = payload.index;
      visible.value = true;

      // prevents content jumping when modal is opened
      scrollPosition.value = window.scrollY;
      document.body.classList.add("modal-open");
      document.body.style.top = `-${scrollPosition.value}px`;
    };

    const hideLightbox = () => {
      visible.value = false;
      document.body.classList.remove("modal-open");

      // restores scroll position when modal is closed
      document.body.style.top = "";
      document.body.style.overflowY = "scroll !important";
      window.scrollTo(0, scrollPosition.value);
    };

    return {
      clients,
      clientProjects,
      toggleClient,
      lightboxImages,
      lightboxIndex,
      showLightbox,
      hideLightbox,
      visible
    };
  },
});
</script>

<style scoped lang="scss">
#client-list {
  // width: 100%;
  .client-container {
    border-top: 1px solid #fff;
    background-color: #000;
    .client-name {
      color: #fff;
      padding: 20px;
      cursor: pointer;
      position: relative;
      z-index: 1;
      // &::before {
        //   content: "";
        //   position: absolute;
        //   top: 0;
        //   left: 0;
        //   width: 100%;
        //   height: 100%;
        //   background-color: #000;
        //   z-index: -1;
        // }
        .client-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: $content-width;
          margin: 0 auto;
        }
        p {
        margin: 0;
      }
      .arrow {
        line-height: 1;
        transition: transform 0.3s ease;
        transform: rotate(-135deg);
        font-weight: bold;
        &.open {
          transform: rotate(0deg);
        }
      }
    }
    .client-project {
      max-height: 0;
      transition: max-height 0.3s ease;
      overflow: hidden;
      background-color: #fff;
    }
  }
}

::v-deep .vel-modal .vel-btns-wrapper .vel-toolbar {
  display: none !important;
}
::v-deep .carousel {
  padding-bottom: 20px;
  max-width: 1104px;
  margin: 0 auto;
}
@media #{$lg} {
  ::v-deep .carousel__prev {
    left: -5px;
  }
  ::v-deep .carousel__next {
    right: -5px;
  }
  ::v-deep .carousel__prev, ::v-deep .carousel__next {
    margin: 0;
  }
}
</style>
