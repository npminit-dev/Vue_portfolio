<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
import BurguerIcon from './BurguerIcon.vue';
import ExternalLink from './ExternalLink.vue';
import SectionLink from './SectionLink.vue';
import type { ExternalLinkIcon } from '@/typedefs/navigation';
import BurgerMenu from './BurgerMenu.vue';

const links = ['Me', 'Projects', 'Contact']

const icons: ExternalLinkIcon[] = [
  {
    icon: 'co-github',
    link: 'https://github.com/npminit-dev',
    scale: '1.3',
    title: 'Visit my GitHub profile'
  }, {
    icon: 'co-stackoverflow',
    link: 'https://es.stackoverflow.com/users/224775/infinit3loop',
    scale: '1.35',
    title: 'Visit my StackOverflow profile'
  },
  {
    icon: 'co-linkedin-in',
    link: 'https://www.linkedin.com/in/jorge-balsamo-dev/',
    scale: '1.5',
    title: 'Visit my LinkedIn Profile'
  },]

const burguerOpen = ref<boolean>(false)

function handleSwitch() {
  burguerOpen.value = !burguerOpen.value
}

watchEffect(() => {
  console.log(burguerOpen.value)
})

</script>

<template>
  <div id="box">
    <nav class="box_nav">
      <SectionLink v-for="link of links" :title="link" />
    </nav>
    <BurguerIcon :burguer-open="burguerOpen" @switch="handleSwitch" />
    <nav class="box_nav">
      <ExternalLink v-for="item in icons" :link="item.link" :icon="item.icon" :scale="item.scale" :title="item.title" />
    </nav>
    <div id="box_separator"></div>
  </div>
  <BurgerMenu :links :burguer-open />
</template>

<style scoped>
#box {
  position: sticky;
  top: 0;
  left: 0;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--background);
  overflow: hidden;
  z-index: 100;
  animation: fadein_left 300ms ease-out forwards;

  @media screen and (width < 578px) {
    overflow: visible;
  }

  #box_separator {
    position: absolute;
    width: calc(100% - 20px);
    bottom: 0;
    left: 10px;
    height: 1px;
    background-color: var(--separator);

    @media screen and (width < 578px) {
      display: none;
    }
  }

  .box_nav {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &:nth-child(1) {
      @media screen and (width < 578px) {
        display: none;
      }
    }
  }
}
</style>