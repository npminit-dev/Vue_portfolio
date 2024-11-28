<script setup lang="ts">
import type { ExternalLinkIcon } from '@/typedefs/navigation';

  const { link, icon, scale, title } = defineProps<ExternalLinkIcon>()
</script>

<template>
  <a class="extbox" :href="link" target="_blank">
    <v-icon :name="icon" :scale="scale" class="extbox_icon" :title="title"></v-icon>
    <div class="extbox_blur"></div>
  </a>
</template>

<style scoped>
  .extbox {
    position:relative;
    height: min-content;
    width: min-content;
    margin-left: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    .extbox_blur {
      position: absolute;
      height: 130%;
      width: 130%;
      transition-duration: 200ms;
      z-index: -100;
    }

    .extbox_icon {
      fill: var(--text);
    }

    &:hover > .extbox_blur {
      background-color: var(--hover);
      filter: blur(8px);
    } 

    &:hover > .extbox_icon {
      fill: #fff
    }
  }





</style>