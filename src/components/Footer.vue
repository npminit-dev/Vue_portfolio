<script setup lang="ts">

</script>

<template>
  <footer id="footer">
    <div class="footer_line"></div>
    <p class="footer_p">Powered by <v-icon name="ri-vuejs-line" fill="#42B883"></v-icon></p>
  </footer>
</template>

<style scoped>
  #footer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 100px;
    height: fit-content;
    padding: 5px;
    
    .footer_line {
      display: block;
      width: 100%;
      height: 1px;
      background-color: var(--separator);
    }

    .footer_p {
      display: inline;
      margin-top: 5px;
    }
  }
</style>