<script setup lang="ts">
import { colors } from '@/Constants';

const { data } = defineProps<{ data: { icon: string, description: string, color: string } | null }>()
</script>

<template>
  <div id="boxsel">
    <v-icon 
      class="boxsel_ico" 
      :name="data?.icon || 'io-bulb'" 
      :key="data?.icon || 'data'" 
      :fill="data?.color || colors.HIGHLIGHT.concat('55')"
    ></v-icon>
    <p class="boxsel_p" :key="data?.description">
      <template v-if="data !== null">
        {{ data.description }}
      </template>
      <template v-else>
        Each icon represents a skill I master, choose one to learn about my expertise with it.
      </template>
    </p>
  </div>
</template>

<style scoped>
#boxsel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  width: 400px;
  border-radius: 100%;

  @media screen and (width < 769px) {
    height: 150px;
    width: 150px;
  }

  .boxsel_p {
    text-align: center;
    text-shadow:
      8px 8px 8px var(--background),
      -8px 8px 8px var(--background),
      8px -8px 8px var(--background),
      -8px -8px 8px var(--background);
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: 300;
    color: var(--text);
    z-index: 10;
    animation: deblur 300ms linear 150ms forwards;
    filter: opacity(0);

    @media screen and (width < 769px) {
      letter-spacing: normal;
      font-size: 16px;
    }
  }

  .boxsel_ico {
    position: absolute;
    height: 250px;
    width: 250px;
    filter: opacity(0);
    animation: bigger 500ms cubic-bezier(0,1.06,.28,1) 150ms forwards;

    @media screen and (width < 769px) {
      height: 150px;
      width: 150px;
    }
  }
}

@keyframes bigger {
  from {
    transform: scale(.5);
    filter: opacity(.5)
  }

  to {
    transform: scale(1);
    filter: opacity(.5)
  }
}

@keyframes deblur {
  from {
    filter: blur(7px) opacity(1)
  }

  to {
    filter: blur(0) opacity(1)
  }
}
</style>