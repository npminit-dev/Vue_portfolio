<script setup lang="ts">
import { PHRASES } from '@/Constants';
import sleep from '@/utils';
import { computed, onMounted, ref } from 'vue';
import Paragraph from './Paragraph.vue';
import Phrase from './Phrase.vue';
import Name from './Name.vue';
const index = ref(0)
const phrase = computed(() => PHRASES[index.value])

onMounted(async () => {
  while(true) {
    if(index.value < PHRASES.length) {
      await sleep(5000)
      index.value++
    } else index.value = 0
  }
})
</script>

<template>
  <div id="boxphrases">
    <Name/>
    <Phrase :phrase="phrase.title"/>
    <Paragraph :paragraph="phrase.subtitle" :key="phrase.subtitle"/>
  </div>
</template>

<style scoped>
  #boxphrases {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    overflow: hidden;

    @media screen and (width < 768px) {
      align-items: center;
      justify-content: flex-start;
      padding-top: 20px;
    }
  }
</style>