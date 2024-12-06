<script setup lang="ts">
  import type { SwiperProps } from 'swiper/react';
  import Project from './Project.vue';
  import { PROJECTS } from '../../Constants'
  import { onMounted, useTemplateRef } from 'vue';
  import type { SwiperContainer } from 'swiper/element';

  const swiperContainer = useTemplateRef<SwiperContainer>('projects')

  onMounted(() => {
    const settings: SwiperProps = {
      autoplay: {
        pauseOnMouseEnter: true,
        delay: 7000
      },
      grabCursor: true,
      speed: 750,
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
    <nav id="projects_nav">
      <div id="projects_nav_inner">
        <div id="prev" class="projects_nav_box">
          <v-icon class="projects_nav_box_icon" name="bi-chevron-compact-left"></v-icon>
        </div>
        <div id="next" class="projects_nav_box">
          <v-icon class="projects_nav_box_icon" name="bi-chevron-compact-right"></v-icon>
        </div>
      </div>
    </nav>
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

    #projects_swiper {
      position: relative;
      margin: 0 50px;
      min-height: calc(100vh - 39px);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    #projects_nav {
      position: absolute;
      width: 100%;
      height: min-content;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 0;
      bottom: 0;
      margin: auto 0;
      z-index: 200;
      pointer-events: none;

      #projects_nav_inner {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 800px;

        .projects_nav_box {
          padding: 0 10px;
          cursor: pointer;
          pointer-events: all;
          transition-duration: 200ms;
          &:hover {
            transform: scale(1.1);
          }
  
          .projects_nav_box_icon {
            height: 60px;
            width: 60px;
          }
        }
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