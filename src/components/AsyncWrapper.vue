<script setup lang="ts">
  import { useIntersectionObserver } from '@vueuse/core'
  import { ref } from 'vue'

  const target = ref(null)
  const targetIsVisible = ref(false)

  const { stop } = useIntersectionObserver(
    target,
    ([entry]) => {
      targetIsVisible.value = entry?.isIntersecting || false
      if(targetIsVisible.value) stop()
    }
  )
</script>

<template>
  <div class="box" :class="{ visible: targetIsVisible }" ref="target">
    <slot v-if="targetIsVisible"></slot>
  </div>
</template>

<style scoped>
  .box {
    position: relative;
    height: 100vh;
    width: 100%;
  }

  .visible {
    height: fit-content;
  }
</style>