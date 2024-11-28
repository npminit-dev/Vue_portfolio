<script setup lang="ts">

const { burguerOpen } = defineProps<{ burguerOpen: boolean }>()
const emits = defineEmits<{(e: 'switch'): void}>()

</script>

<template>
  <div class="burgbox" :class="{ burgbox_open: burguerOpen }" @click="$emit('switch')">
    <div id="burgbox_blur"></div>
    <template v-if="burguerOpen">
      <div class="burgbox_line topline_closed"></div>
      <div class="burgbox_line bottomline_closed"></div>
    </template>
    <template v-else>
      <div class="burgbox_line topline_open"></div>
      <div class="burgbox_line bottomline_open"></div>
    </template>
  </div>
</template>

<style scoped>
.burgbox {
  position: relative;
  height: 22px;
  width: 22px;
  display: none;
  justify-content: space-around;
  cursor: pointer;
  transition-duration: 200ms;

  .burgbox_line {
    position: absolute;
    height: 2px;
    width: 22px;
    background-color: var(--text);
    border-radius: 2px;
    transition-duration: 200ms;
  }

  .burgbox_line:nth-of-type(2) {
    top: 4px;
    left: 0;
    transform-origin: center center;
  }

  .burgbox_line:nth-of-type(3) {
    bottom: 4px;
    left: 0;
  }

  #burgbox_blur {
    position: absolute;
    height: 120%;
    width: 120%;
    z-index: -100;
    transition-duration: 200ms;
  }

  &:hover > #burgbox_blur {
    background-color: var(--highlight);
    filter: blur(8px);
  }

  &:hover > .burgbox_line {
    background-color: var(--background);
  }
 
  .topline_open {
    animation: rotateTop 300ms ease-in reverse forwards
  }

  .bottomline_open {
    animation: rotateBottom 300ms ease-in reverse forwards
  }

  .topline_closed {
    animation: rotateTop 300ms ease-out forwards
  }
  
  .bottomline_closed {
    animation: rotateBottom 300ms ease-out forwards
  }

  @media screen and (width < 578px) {
    display: block;
  }

}

@keyframes rotateBottom {
  from {
    transform: translateY(0) rotateZ(0)
  }
  to {
    transform: translateY(-6px) rotateZ(-225deg)
  }
}

@keyframes rotateTop {
  from {
    transform: translateY(0) rotateZ(0)
  }
  to {
    transform: translateY(6px) rotateZ(405deg)
  }
}

</style>