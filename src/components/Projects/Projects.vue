<script setup lang="ts">
import type { SwiperProps } from 'swiper/react';
import Project from './Project.vue';
import { PROJECTS } from '../../Constants'
import { onMounted, ref, useTemplateRef } from 'vue';
import type { SwiperContainer } from 'swiper/element';
import SwipeBtns from './SwipeBtns.vue';
import { useIntersectionObserver } from '@vueuse/core';

const swiperContainer = useTemplateRef<SwiperContainer>('projects')
const target = ref(null)
const targetIsVisible = ref(false)

const { stop } = useIntersectionObserver(
  target,
  ([entry]) => {
    targetIsVisible.value = entry?.isIntersecting || false
    if(targetIsVisible.value) stop()
  },
)

onMounted(() => {
  const settings: SwiperProps = {
    autoplay: {
      pauseOnMouseEnter: true,
      delay: 7000
    },
    grabCursor: true,
    speed: 500,
    threshold: 75,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    loop: true,
    slidesPerView: 1,
    navigation: {
      prevEl: document.getElementById('prev'),
      nextEl: document.getElementById('next'),
    },
    observeParents: true,
    effect: 'cube',
    cubeEffect: {
      shadowOffset: 100,
      shadowScale: .5,
      slideShadows: false
    },
  }
  if (swiperContainer.value) {
    Object.assign(swiperContainer.value, settings);
    swiperContainer.value.initialize();
  }
})
</script>

<template>
  <section id="projects" ref="target">
    <h1 id="projects_title">~ Swipe to explore ~</h1>
    <SwipeBtns />
    <swiper-container :class="{ appear: targetIsVisible }" id="projects_swiper" :init="false" ref="projects"
      style="height: 100%;">
      <Project :="project" v-for="project in PROJECTS" />
    </swiper-container>
    <div class="shine"></div>
  </section>
</template>

<style scoped>
#projects {
  position: relative;
  width: 100%;
  min-height: calc(100vh - 39px);
  overflow-x: clip;

  @media screen and (width < 768px) {
    min-height: unset;
    height: fit-content;
  }

  #projects_title {
    position: relative;
    display: none;
    width: 100%;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    margin-top: 20px;

    @media screen and (width < 768px) {
      display: block;
    }
  }

  #projects_swiper {
    position: relative;
    margin: 0 50px;
    min-height: calc(100vh - 39px);
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (width < 1025px) {
      min-height: unset;
      height: fit-content;
      margin: 0 10px;
    }
  }

  .shine {
    position: absolute;
    bottom: -150px;
    left: -150px;
    height: 300px;
    width: 300px;
    background-color: var(--highlight);
    animation: breathe 6s ease-in-out alternate infinite;
    filter: blur(100px);
    border-radius: 100%;
    z-index: -200;
  }
}

.appear {
  animation: fadein 1s ease-out forwards !important;
}
</style>