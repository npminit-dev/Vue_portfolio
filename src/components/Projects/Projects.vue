<script setup lang="ts">
  import type { SwiperProps } from 'swiper/react';
  import Project from './Project.vue';
  import { PROJECTS } from '../../Constants'
  import { onMounted, useTemplateRef } from 'vue';
  import type { SwiperContainer } from 'swiper/element';
  import SwipeBtns from './SwipeBtns.vue';

  const swiperContainer = useTemplateRef<SwiperContainer>('projects')

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
      preventClicks: true,
      watchSlidesProgress: true,
      slidesPerView: 1,
      navigation: {
        prevEl: document.getElementById('prev'),
        nextEl: document.getElementById('next'),
      },
      observeParents: true,
    }
    if(swiperContainer.value) {
      Object.assign(swiperContainer.value, settings);
      swiperContainer.value.initialize();
    }
  })
</script>

<template>
  <section id="projects">
    <h1 id="projects_title" class="appear">~ Swipe to explore ~</h1>
    <SwipeBtns/>
    <swiper-container id="projects_swiper" :init="false" ref="projects" style="height: 100%;">
      <Project :="project" v-for="project in PROJECTS"/>
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
      position: absolute;
      display: none;
      width: fit-content;
      top: 50px;
      left: 0;
      right: 0;
      margin: 0 auto;
      font-weight: 400;
      font-size: 18px;
      filter: opacity(0);

      @media screen and (width < 768px) {
        display: block;
        top: unset;
        bottom: -25px;
      }
    }

    .appear {
      animation: fadein_down 1s ease-out forwards;
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
      border-radius: 100%
    }
  }
</style>