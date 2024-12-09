<script setup lang="ts">
import type { ProjectIcon } from '@/typedefs/projects';

const { icons } = defineProps<{ icons: ProjectIcon[] }>()

const shouldRotated = (icon:string) => {
  const rotatables = ['si-reactquery', 'co-react']
  if(rotatables.includes(icon)) return true
  return false
} 

</script>

<template>
  <div class="slide_wrap_data_iconbox">
    <div class="slide_wrap_data_iconbox_box" v-for="icon in icons">
      <div class="slide_wrap_data_iconbox_box_blur" :style="{ backgroundColor: icon.background }"></div>
      <v-icon class="slide_wrap_data_iconbox_box_icon" :name="icon.name" :class="{ rotate: shouldRotated(icon.name) }"></v-icon>
    </div>
  </div>
</template>

<style scoped>
.slide_wrap_data_iconbox {
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media screen and (width < 1025px) {
    justify-content: center;
  }

  .slide_wrap_data_iconbox_box {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    pointer-events: all;
    margin: 10px 5px;
    margin-bottom: 0;
    cursor: pointer;

    .slide_wrap_data_iconbox_box_icon {
      display: inline;
      z-index: 50;
      height: 35px;
      width: 35px;
      fill: var(--text)
    }

    .slide_wrap_data_iconbox_box_blur {
      position: absolute;
      height: 120%;
      width: 120%;
      display: inline;
      border-radius: 100%;
      filter: opacity(0);
      transition-duration: 200ms;
    }

    &:hover>.slide_wrap_data_iconbox_box_blur {
      filter: opacity(1) blur(10px);
    }

  }
}

.rotate {
  animation: rotate 10s linear infinite
}
</style>