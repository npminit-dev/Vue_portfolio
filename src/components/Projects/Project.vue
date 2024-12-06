<script setup lang="ts">
import type { Project } from '@/typedefs/projects';
const { name, description, cover, icons, links } = defineProps<Project>()
import { useIntersectionObserver } from '@vueuse/core'
import Link from '../Link.vue';
import Description from './Description.vue';
import { ref } from 'vue'

const target = ref(null)
const targetIsVisible = ref(false)

const { stop } = useIntersectionObserver(
  target,
  ([entry]) => {
    targetIsVisible.value = entry?.isIntersecting || false
  }, { threshold: .5 }
)

</script>

<template>
  <swiper-slide class="slide" ref="target">
    <article class="slide_wrap" :class="{ shown: targetIsVisible }" :key="targetIsVisible + '1'">
      <div class="slide_wrap_media">
        <img class="slide_wrap_media_char" />
        <img class="slide_wrap_media_cover" />
      </div>
      <div class="slide_wrap_data">
        <h1 class="slide_wrap_data_name">{{ name }}</h1>
        <Description :description />
        <div class="slide_wrap_data_iconbox">
          <div class="slide_wrap_data_iconbox_box" v-for="icon in icons">
            <div class="slide_wrap_data_iconbox_box_blur" :style="{ backgroundColor: icon.background }"></div>
            <v-icon class="slide_wrap_data_iconbox_box_icon" :name="icon.name"></v-icon>
          </div>
        </div>
        <div class="slide_wrap_data_linkbox">
          <Link :title="link.name" :href="link.url" v-for="link in links" />
        </div>
      </div>
    </article>
  </swiper-slide>
</template>

<style scoped>
.slide {

  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .slide_wrap {

    width: 400px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: opacity(0);

    .slide_wrap_data {

      .slide_wrap_data_name {
        font-size: 32px;
        font-weight: 700;
        line-height: 100%;
      }

      .slide_wrap_data_linkbox {
        margin: 20px 0;
      }

      .slide_wrap_data_iconbox {
        padding: 10px 0;

        .slide_wrap_data_iconbox_box {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          pointer-events: all;
          margin: 10px 5px;
          margin-bottom: 0;
          cursor: pointer;

          .slide_wrap_data_iconbox_box_icon {
            display: inline;
            z-index: 50;
            height: 35px;
            width: 35px;
          }

          .slide_wrap_data_iconbox_box_blur {
            position: absolute;
            height: 150%;
            width: 150%;
            display: inline;
            border-radius: 100%;
            filter: opacity(0);
            transition-duration: 200ms;
          }

          &:hover>.slide_wrap_data_iconbox_box_blur {
            filter: opacity(1) blur(10px);
          }

        }
      }


    }

    .slide_wrap_media {

      .slide_wrap_media_char {}

      .slide_wrap_media_cover {}
    }
  }

}

.shown {
  animation: show 1s linear forwards;
}

@keyframes show {
  from {
    filter: opacity(0)
  }

  to {
    filter: opacity(1)
  }
}

@keyframes hide {
  from {
    filter: opacity(1)
  }

  to {
    filter: opacity(0)
  }
}
</style>