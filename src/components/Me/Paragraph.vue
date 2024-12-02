<script setup lang="ts">
import Typed from 'typed.js';
import { computed, onMounted, ref, watch, watchEffect } from 'vue';

const { paragraph } = defineProps<{ paragraph:string }>()

const backDelay = computed(() => {
  const writingTime = paragraph.length * 20; 
  const erasingTime = paragraph.length * 10; 
  const remainingTime = 5000 - writingTime; 
  const backDelay = remainingTime - erasingTime; 
  return backDelay
})

const typing = ref(null);

watchEffect(() => {
  if(typing.value !== null) {
    new Typed(typing.value, {
      strings: [paragraph],
      typeSpeed: 10,
      backSpeed: 10,
      loop: true,
      cursorChar: '|',
      backDelay: backDelay.value,
    });
  }
})
</script>

<template>
  <div id="boxpar">
    <span :key="paragraph" ref="typing" id="paragraph"></span>
  </div>
</template>

<style scoped>
  #boxpar {
    height: 50px;
    width: 100%;
    max-width: 400px;
    margin-top: 20px;
    text-align: left;

    @media screen and (width < 578px) {
      text-align: center;
      padding: 0 10px
    }
  }

  #paragraph {
    font-family: var(--paragraphs);
    font-size: 18px;
    
    @media screen and (width < 578px) {
      font-size: 14px;
    }
  }
</style>