<script setup lang="ts">
import Avatar from './Avatar.vue';
import Phrases from './Phrases.vue';
import Snakes from './Snakes.vue';

</script>

<template>
  <section id="me">
    <div id="shine1" class="shine"></div>
    <div id="shine2" class="shine"></div>
    <div id="me_left">
      <Snakes />
      <Avatar />
    </div>
    <div id="me_right">
      <Phrases/>
    </div>
  </section>
</template>

<style scoped>
#me {
  position: relative;
  height: calc(100vh - 39px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: clip;

  @media screen and (width < 768px) {
    flex-direction: column;
  }

  #me_left {

    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (width < 768px) {
      align-items: end;
      padding-bottom: 20px;
    }

    .svg {
      position: absolute;
    }
  }

  #me_right {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
  }

  .shine {
    position: absolute;
    height: 300px;
    width: 300px;
    border-radius: 100%;
    filter: blur(100px);
    animation: breathe 6s ease-in-out alternate infinite;
    
    @media screen and (width < 768px) {
      height: 150px;
      width: 150px;
    }
  }

  #shine1 {
    background-color: var(--highlight);
    top: -150px;
    right: -150px;
    animation-delay: -6s;

    @media screen and (width < 768px) {
      height: -50px;
      width: -50px;
    }
  }

  #shine2 {
    background-color: var(--hover);
    left: -150px;
    bottom: -150px;

    @media screen and (width < 768px) {
      height: -50px;
      width: -50px;
    }
  }

}
</style>