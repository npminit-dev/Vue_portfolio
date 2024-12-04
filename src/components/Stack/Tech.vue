<script setup lang="ts">
import type { TechType } from '@/Constants';
import { computed } from 'vue';

const { title, description, icon, color, position, background, selected } = defineProps<TechType&{selected:boolean}>();

const emit = defineEmits<{
  (e: 'select', value: TechType): void
}>()

const computedStyles = computed(() => ({
  left: position?.left !== undefined ? `${position.left - 50}px` : '0px',
  top: position?.top !== undefined ? `${position.top - 50}px` : '0px',
}));

const handleSelect = () => {
  emit('select', { title, description, icon, color, position, background })
}

</script>

<template>
  <div id="techbox" :style="computedStyles" :title @click="handleSelect">
    <div class="techbox_blur" :class="{ selected }" :style="{ backgroundColor: background }"></div>
    <div class="techbox_tech">
      <v-icon 
        :name="icon" 
        :fill="color" 
        class="techobox_tech_icon"
        :class="{selected}"
      ></v-icon>
    </div>
  </div>
</template>

<style scoped>
#techbox {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100px;
  overflow: visible;
  cursor: pointer;
  transition-duration: 750ms;

  .techbox_blur {
    position: absolute;
    height: 100px;
    width: 100px;
    border-collapse: separate;
    border-radius: 100%;
    filter: opacity(0);
    transition-duration: 200ms;

    @media screen and (width < 769px) {
    height: 50px;
    width: 50px;
  }
  }

  &:hover > .techbox_blur, & > .techbox_blur.selected {
    filter: opacity(1) blur(20px)
  }

  &:not(:hover) > .techbox_tech > .techobox_tech_icon:not(.selected) {
    fill: var(--text);
  }

  .techbox_tech {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10px;
    width: 10px;
    animation: rotate 200s linear reverse infinite;

    .techobox_tech_icon {
      position: absolute;
      height: 60px;
      width: 60px;
      transition-duration: 200ms;

      @media screen and (width < 769px) {
        height: 40px;
        width: 40px;
      }
    }
  }
}

@keyframes rotate {
  from {
    transform: rotateZ(0deg);
  }

  to {
    transform: rotateZ(360deg);
  }
}
</style>
