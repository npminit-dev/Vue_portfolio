<script setup lang="ts">

</script>

<template>
  <nav id="projects_nav">
    <div id="projects_nav_inner">
      <div id="prev" class="projects_nav_inner_box">
        <v-icon class="projects_nav_inner_box_icon" name="bi-chevron-compact-left"></v-icon>
      </div>
      <div id="next" class="projects_nav_inner_box">
        <v-icon class="projects_nav_inner_box_icon" name="bi-chevron-compact-right"></v-icon>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  #projects_nav {
    position: absolute;
    width: 100%;
    height: min-content;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    bottom: 0;
    margin: auto 0;
    z-index: 200;
    pointer-events: none;

    @media screen and (width < 480px) {
      display: none;
    }

    #projects_nav_inner {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 1000px;

      .projects_nav_inner_box {
        padding: 0 10px;
        cursor: pointer;
        pointer-events: all;
        transition-duration: 150ms;
        transition-timing-function: ease-out;

        @media screen and (width < 768px) {
          padding: 0
        }

        &:hover {
          transform: scale(1.25);
        }

        .projects_nav_inner_box_icon {
          height: 60px;
          width: 60px;
          
          @media screen and (width < 768px) {
            height: 45px;
            width: 45px;
          }
        }
      }
    }
  }
</style>