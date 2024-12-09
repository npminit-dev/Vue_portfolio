<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core';
import ContactForm from './ContactForm.vue';
import Me from './Me.vue'
import { ref } from 'vue';

const target = ref(null)
const targetIsVisible = ref(false)

const { stop } = useIntersectionObserver(
  target,
  ([entry]) => {
    targetIsVisible.value = entry?.isIntersecting || false
    if(targetIsVisible.value) stop()
  },
)

</script>

<template>
  <section id="contact" ref="target">
    <ContactForm :target-is-visible/>
    <Me :target-is-visible/>
  </section>
</template>

<style scoped>
  #contact {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media screen and (width < 769px) {
      flex-direction: column;
      height: fit-content;
    }

  }
</style>