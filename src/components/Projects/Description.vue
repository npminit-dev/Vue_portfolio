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
  font-weight: 300;
  font-size: 16px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-top: 1px solid var(--separator);
  border-bottom: 1px solid var(--separator);

  @media screen and (width < 1025px) {
    width: 100%;
    text-align: center;
    font-size: 15px;
    padding: 10px 5px;
  }
}
</style>