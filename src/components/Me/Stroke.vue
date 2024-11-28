<script lang="ts" setup>
  import type { StrokeProps } from '@/typedefs/me';
  import { useAnimatedPath } from '../../composables/useAnimatedPath';

  const { duration, delFromBehind, easings } = defineProps<StrokeProps>()
  const { lineRef } = useAnimatedPath({duration, easings, delFromBehind});
</script>

<template>
  <div>
    <svg width="473" height="155" viewBox="0 0 473 155" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path ref="lineRef" d="M472.5 0.5H315.5V43H360.5V84H231.5V43H181V84H67V154.5H0" stroke="white"/>
    </svg>
  </div>
</template>

<style scoped>
  div {
    position: relative;
    height: fit-content;
    width: fit-content;
  }
</style>
