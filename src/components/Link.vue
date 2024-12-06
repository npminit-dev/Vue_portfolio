<script setup lang="ts">
  const {} = defineProps<{
    title: string,
    href:string,
    classes?:string
  }>()
</script>

<template>
  <span class="link">
    <a class="link_link" :href :class="classes" target="_blank">{{ title }}</a>
    <div class="link_blur"></div>
  </span>
</template>

<style scoped>
.link {

  position: relative;
  height: fit-content;
  width: fit-content;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover > .link_blur {
    filter: blur(10px) opacity(1);
  }

  &:hover > .link_link {
    text-decoration: underline solid var(--text);
  }

  .link_link {
    font-family: var(--titles);
    margin: 0 10px;
    font-weight: 600;
    z-index: 10;
  }

  .link_blur {
    position: absolute;
    height: 120%;
    width: 120%;
    background-color: var(--hover);
    border-radius: 100%;
    filter: blur(10px) opacity(0);
    transition-duration: 200ms;
  }

}

</style>