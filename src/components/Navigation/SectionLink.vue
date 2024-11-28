<script setup lang="ts">
const { title } = defineProps<{ title: string }>()

</script>

<template>
  <div class="linkbox">
    <a class="linkbox_link" :href="`#${title.toLowerCase()}`">{{ title }}</a>
    <div class="linkbox_blur"></div>
  </div>
</template>

<style scoped>

.linkbox {
  position: relative;
  height: min-content;
  width: min-content;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;

  .linkbox_blur {
    height: 100%;
    min-width: 40px;
    width: 125%;
    transition-duration: 300ms;
    border-radius: 100%;
    position: absolute;
  }

  .linkbox_link {
    font-size: 1em;
    font-weight: 700;
    z-index: 100;
    transition-duration: 200ms;
  }

  &:hover>.linkbox_blur {
    background-color: var(--highlight);
    filter: blur(8px);
  }

  &:hover>.linkbox_link {
    color: var(--background)
  }

}
</style>