
<script setup lang="ts">
  import './assets/main.css'
  import Navigation from './components/Navigation/Navigation.vue'
  import Me from './components/Me/Me.vue';
  import Divider from './components/Divider.vue';
  import { defineAsyncComponent } from 'vue';
  import AsyncWrapper from './components/AsyncWrapper.vue';

  const AsyncStack = defineAsyncComponent(() => import('./components/Stack/Stack.vue'))
  const AsyncProjects = defineAsyncComponent(() => import('./components/Projects/Projects.vue'))
</script>

<template>
  <Navigation/>
  <Me/>

  <Divider title="STACK"/>

  <AsyncWrapper>
    <AsyncStack/>
  </AsyncWrapper>

  <Divider title="PROJECTS"/>

  <AsyncWrapper>
    <AsyncProjects/>
  </AsyncWrapper>

  <Divider title="CONTACT"/>

  
</template>

<style>

</style>
