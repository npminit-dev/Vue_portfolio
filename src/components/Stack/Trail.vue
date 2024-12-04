<script setup lang="ts">
import type { LineData } from '@/typedefs/stack';
import { computed, defineProps, watchEffect } from 'vue';

  const { linedata, index, run } = defineProps<{ linedata: LineData, index:number, run:boolean }>()

  const width = computed(() => {
    return Math.sqrt((linedata.x2 - linedata.x1) ** 2 + (linedata.y2 - linedata.y1) ** 2)
  })

</script>



<template>
  <div
    :key="'line-' + index" 
    class="line"
    :class="{ disappear: run }"
    :style="{
      left: `${linedata.x1}px`,
      top: `${linedata.y1}px`,
      width: `${run ? width : 0}px`,
      transform: `rotate(${Math.atan2(linedata.y2 - linedata.y1, linedata.x2 - linedata.x1) * (180 / Math.PI)}deg)`,
    }"
  />
</template>

<style scoped>
  .line {
    position: absolute;
    height: 2px;
    width: 0;
    background-color: var(--separator);
    transform-origin: 0 50%;
    background: linear-gradient(
      to right, 
      transparent 0%, 
      transparent 40%,
      var(--separator) 40%, 
      var(--separator) 60%, 
      transparent 60%, 
      transparent 100%
    );
    background-size: 300% 100%; 
    transform-origin: 0 50%; 
  }

  .disappear {
    animation: slidebackground 300ms ease-out forwards !important;
  }

  @keyframes slidebackground {
    from {
      background-position: 0% 0%;
    }
    to {
      background-position: 100% 0%;
    }
}
</style>