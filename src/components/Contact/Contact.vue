<script setup lang="ts">
import ContactForm from './ContactForm.vue';
import Me from './Me.vue'

</script>

<template>
  <section id="contact">
    <ContactForm/>
    <Me/>
  </section>
</template>

<style scoped>
  #contact {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
</style>