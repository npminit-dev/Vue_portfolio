<script lang="ts" setup>
import { defineComponent, ref, watchEffect } from 'vue';
import { useIntersectionObserver } from '@vueuse/core'

const { title } = defineProps<{ title: string }>();

const target = ref(null)
const targetIsVisible = ref(false)

const { stop } = useIntersectionObserver(
  target,
  ([entry]) => {
    targetIsVisible.value = entry?.isIntersecting || false
  }, {
    rootMargin: '-20px'
  }
)

</script>

<template>
  <div id="boxdiv" ref="target">
    <div id="boxdiv_leftline" class="line" :class="{ animate_lineleft: targetIsVisible }"></div>
    <h1 id="title" :class="{ animate_title: targetIsVisible }">{{ title }}</h1>
    <div id="boxdiv_rightline" class="line" :class="{ animate_lineright: targetIsVisible }"></div>
  </div>
</template>

<style scoped>
#boxdiv {
  position: relative;
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: auto min-content auto;
  padding: 5px 10px;
  margin: 100px 0;

  #title {
    margin: 0 20px;
    align-self: center;
    justify-self: center;
    font-size: 20px;
    text-wrap: nowrap;
    filter: opacity(0);
  }

  #boxdiv_leftline {

  }

  #boxdiv_rightline {
    justify-self: end;
  }

  .animate_title {
    animation: appear 350ms cubic-bezier(.85,.24,.8,.77) forwards
  }

  .animate_lineleft {
    animation: extend 350ms cubic-bezier(.85,.24,.8,.77) forwards;
  }

  .animate_lineright {
    animation: extend 350ms cubic-bezier(.85,.24,.8,.77) forwards;
  }

  .line {
    height: 2px;
    width: 0;
    background-color: var(--separator);
    align-self: center;
    border-radius: 100%;
  }
}



@keyframes appear {
  from {
    filter: blur(25px);
  }

  to {
    filter: blur(0);
  }
}

@keyframes extend {
  to {
    width: 100%;
  }
}
</style>