<script lang="ts" setup>
import { onMounted, ref, useTemplateRef, watchEffect } from 'vue';
import { colors, TECHS, type TechType } from '@/Constants';
import Tech from './Tech.vue';
import Selected from './Selected.vue';
import type { LineData } from '@/typedefs/stack';
import Trail from './Trail.vue';

const container = useTemplateRef<HTMLDivElement | null>('containerRef')
const radius = ref<number | null>(null)
const techs = ref(TECHS)
const selected = ref<TechType | null>(null)
const lines = ref<LineData[]>([]);

function observeHeight(box: HTMLDivElement) {
  const resizeObserver = new ResizeObserver(() => {
    radius.value = box.offsetWidth / 2
  });
  resizeObserver.observe(box);
}

const handleSelected = (newSelected: TechType) => selected.value = newSelected

onMounted(() => {
  if (container.value) {
    observeHeight(container.value)
  }
})

watchEffect(() => {
  if (radius.value) {
    const calculatedLines: LineData[] = [];
    techs.value.forEach((tech, index) => {
      const angle = (index * 360) / techs.value.length;
      const angleRad = (angle * Math.PI) / 180;
      const centerX = radius.value as number, centerY = radius.value as number;
      const techX = centerX + (radius.value as number) * Math.cos(angleRad);
      const techY = centerY + (radius.value as number) * Math.sin(angleRad);
      tech.position = { left: techX, top: techY };
      calculatedLines.push({
        x1: centerX,
        y1: centerY,
        x2: centerX + ((radius.value as number) - 50) * Math.cos(angleRad), // Adjust `-50` as needed for spacing
        y2: centerY + ((radius.value as number) - 50) * Math.sin(angleRad),
        color: tech.color,
        for: tech.title
      });
    });
    lines.value = calculatedLines;
  }
});

</script>

<template>
  <section id="stack">
    <div id="stack_box" ref="containerRef" :style="{ borderColor: (selected?.color + '55') || colors.SEPARATOR }">
      <Tech 
        v-for="tech in techs"
        v-bind="{ ...tech, selected: tech.title === selected?.title }" 
        @select="(tech) => handleSelected(tech)" 
      />
      <Trail 
        v-for="(line, index) in lines" 
        :linedata="line" 
        :index="index" 
        :run="selected?.title === line.for" 
      />
    </div>
    <Selected
      :data="selected ? 
        { icon: selected.icon, description: selected.description, color: selected.background } 
        : null" 
      />
  </section>
</template>

<style scoped>
#stack {
  position: relative;
  width: 100%;
  height: calc(100vh - 39px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: clip;

  @media screen and (width < 769px) {
    height: fit-content;
    margin: 100px 0;
  }

  #stack_box {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 600px;
    width: 600px;
    border-radius: 100%;
    border: 1px dashed var(--separator);
    animation: rotate 200s linear infinite;
    transition-duration: 300ms;

    @media screen and (width < 769px) {
      width: 300px;
      height: 300px;
    }
  }
}

@keyframes rotate {
  from {
    transform: rotateZ(0deg);
  }

  to {
    transform: rotateZ(360deg);
  }
}
</style>