<script setup lang="ts">
import type { ProjectCover } from '@/typedefs/projects';

  const { cover } = defineProps<{cover:ProjectCover}>()
</script>

<template>
  <div class="slide_wrap_media">
    <picture class="slide_wrap_media_char">
      <source style="position: absolute;" :srcset="cover.sm.charCoverUrl" media="(max-width: 769px)" type="image/webp"/>
      <img :src="cover.md.charCoverUrl"/>
    </picture>
    <picture class="slide_wrap_media_cover">
      <source style="position: absolute;" :srcset="cover.sm.coverUrl" media="(max-width: 769px)" type="image/webp"/>
      <img :src="cover.md.coverUrl"/>
    </picture>
  </div>
</template>

<style scoped>
.slide_wrap_media {
  position: relative;
  height: 300px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  border: 2px solid var(--text);
  margin-right: 50px;
  background-color: var(--background);
  overflow: hidden;

  @media screen and (width < 1025px) {
    height: 200px;
    width: 200px;
    margin-right: 0;
  }

  picture {
    display: flex;
  }

  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }

  .slide_wrap_media_char {
    position: absolute;
    z-index: 10;
    height: 100%;
    width: 100%;
    transition-duration: 300ms;
  }

  .slide_wrap_media_char:hover {
    filter: opacity(0);
  }

  .slide_wrap_media_cover {
    height: 100%;
    width: 100%;
  }

}
</style>