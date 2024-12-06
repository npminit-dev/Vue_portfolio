<script setup lang="ts">
const { description } = defineProps<{ description: string }>()
</script>

<template>
  <p class="slide_wrap_data_description">
    {{ description }}
  </p>
</template>

<style scoped>
.slide_wrap_data_description {
  display: inline-block;
  font-weight: 400;
  font-size: 16px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-top: 1px solid var(--separator);
  border-bottom: 1px solid var(--separator);
}
</style>