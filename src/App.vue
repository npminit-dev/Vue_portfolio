
<script setup lang="ts">
  import './assets/main.css'
  import Navigation from './components/Navigation/Navigation.vue'
  import Me from './components/Me/Me.vue';
  import Divider from './components/Divider.vue';
  import { defineAsyncComponent } from 'vue';
  import AsyncWrapper from './components/AsyncWrapper.vue';
  import Contact from './components/Contact/Contact.vue';
  import Footer from './components/Footer.vue';

  const AsyncStack = defineAsyncComponent(() => import('./components/Stack/Stack.vue'))
  const AsyncProjects = defineAsyncComponent(() => import('./components/Projects/Projects.vue'))
</script>

<template>
  <Navigation/>
  
  <Me/>

  <Divider title="STACK"/>

  <AsyncStack/>

  <Divider title="PROJECTS"/>

  <AsyncProjects/>

  <Divider title="CONTACT"/>

  <Contact/>

  <Footer/>
</template>

<style>

</style>
