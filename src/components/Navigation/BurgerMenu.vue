<script setup lang="ts">
import SectionLink from './SectionLink.vue';

  const { links } = defineProps<{ links: string[], burguerOpen:boolean }>()
</script>

<template>
  <nav id="burgmenu" :class="burguerOpen ? 'openMenu' : 'closeMenu'" :key="burguerOpen + ''">
    <div class="burgmenu_itembox" v-for="link in links">
      <SectionLink :title="link"/>
    </div>
    <div class="burgmenu_itembox">
      <div id="box_separator"></div>
    </div>
  </nav>
</template>

<style scoped>
  #burgmenu {
    position: fixed;
    top: 20;
    display: none;
    width: 100%;
    flex-direction: column;
    align-items: start;
    justify-content: center;

    @media screen and (width < 578px) {
      display: flex;
    }

    .burgmenu_itembox {
      width: 100%;
      height: fit-content;
      padding: 5px 10px;
    }

    #box_separator {
      height: 1px;
      width: 100%;
      background-color: var(--separator);

      @media screen and (width > 578px) {
        display: none;
      }
    }
  }

  .closeMenu {
    animation: closeMenu 300ms cubic-bezier(0,1.06,.9,1) forwards;
  }

  .openMenu {
    animation: closeMenu 300ms cubic-bezier(.5,-0.01,.99,.1) reverse forwards;
  }

  @keyframes closeMenu {
    from {
      z-index: 100;
    }
    to {
      transform: translateY(-90px);
      z-index: 0;
    }
  }
</style>