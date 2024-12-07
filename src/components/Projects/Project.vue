<script setup lang="ts">
import type { Project } from '@/typedefs/projects';
import { useIntersectionObserver } from '@vueuse/core'
import Link from '../Link.vue';
import Description from './Description.vue';
import { ref } from 'vue'
import Icons from './Icons.vue';
import ProjectImage from './ProjectImage.vue';

const { name, description, cover, icons, links } = defineProps<Project>()
const target = ref(null)
const targetIsVisible = ref(false)

const { stop } = useIntersectionObserver(
  target,
  ([entry]) => {
    targetIsVisible.value = entry?.isIntersecting || false
  }, { threshold: .5 }
)

</script>

<template>
  <swiper-slide class="slide" ref="target">
    <article class="slide_wrap" :class="{ shown: targetIsVisible }" :key="targetIsVisible + '1'">
      <ProjectImage :cover/>
      <div class="slide_wrap_data">
        <h1 class="slide_wrap_data_name">{{ name }}</h1>
        <Description :description />
        <Icons :icons="icons" />
        <div class="slide_wrap_data_linkbox">
          <Link :title="link.name" :href="link.url" v-for="link in links" />
        </div>
      </div>
    </article>
  </swiper-slide>
</template>

<style scoped>
.slide {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;

  @media screen and (width < 769) {
    height: fit-content;
  }

  .slide_wrap {
    width: fit-content;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: opacity(0);

    @media screen and (width < 1025px) {
      flex-direction: column;
      height: 100%;
    }

    .slide_wrap_data {

      width: 450px;

      @media screen and (width < 480px) {
        width: 100%;
        padding: 0 10px;
      }

      .slide_wrap_data_name {
        font-size: 32px;
        font-weight: 600;
        line-height: 100%;

        @media screen and (width < 1025px) {
          text-align: center;
          font-size: 26px;
        }
      }

      .slide_wrap_data_linkbox {
        margin: 20px 0;
        
        @media screen and (width < 1025px) {
          text-align: center;
          line-height: 5px;
        }
      }
    }
  }
}

.shown {
  animation: show .7s linear forwards;
}

@keyframes show {
  from {
    filter: opacity(0)
  }

  to {
    filter: opacity(1)
  }
}

@keyframes hide {
  from {
    filter: opacity(1)
  }

  to {
    filter: opacity(0)
  }
}
</style>