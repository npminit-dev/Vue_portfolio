<script setup lang="ts">
import sleep from '@/utils';
import { ref, useTemplateRef, watch } from 'vue';

const { target } = defineProps<{ target: string }>();
const letter = ref<string>();
const letterRef = useTemplateRef('letterRef');

watch(
  () => target,
  async () => {
    let iterations = 15 + Math.round(Math.random() * 30);
    for (let i = 1; i <= iterations; i++) {
      await sleep(25);
      letter.value = getRandomLetter();
    }
    await sleep(25);
    letter.value = target === ' ' ? '\u00A0' : target;
  },
  { immediate: true }
);

const getRandomLetter = () => String.fromCharCode(65 + Math.floor(Math.random() * 26));

</script>

<template>
  <span ref="letterRef" class="letter">
    {{ letter }}
  </span>
</template>

<style scoped>
.letter {
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text);
  font-size: 40px;
  font-weight: 600;
  font-family: var(--mono);
  cursor: pointer;
  transition-duration: 200ms;
  transition-timing-function: ease-out;

  @media screen and (width < 768px) {
    font-size: 30px;
  }
}

.letter:nth-child(odd):hover {
  color: var(--hover);
}

.letter:nth-child(even):hover {
  color: var(--highlight);
}
</style>
