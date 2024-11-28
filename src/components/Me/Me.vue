<script setup lang="ts">
import Stroke from './Stroke.vue';

</script>

<template>
  <section id="me">
    <Stroke easings="linear" :duration="1000" :del-from-behind="true" />
  </section>
</template>

<style scoped>
  #me {
    width: 100%;
  }
</style>