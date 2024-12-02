<script setup lang="ts">
import ChangingLetter from './ChangingLetter.vue';
  const { phrase } = defineProps<{ phrase: string }>()
</script>

<template>
  <div id="boxphrase">
    <ChangingLetter :target="letter" v-for="letter in phrase"/>
  </div>
</template>

<style scoped>
  #boxphrase {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
</style>