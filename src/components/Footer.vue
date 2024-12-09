<script setup lang="ts">

</script>

<template>
  <footer id="footer">
    <div id="footer_line"></div>
    <p id="footer_p">Powered by 
      <v-icon name="ri-vuejs-line" fill="#42B883" id="footer_p_ico">
      </v-icon>
    </p>
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
    
    #footer_line {
      display: block;
      width: 100%;
      height: 1px;
      background-color: var(--separator);
    }

    #footer_p {
      display: inline;
      margin-top: 5px;
      font-size: 13px;

      #footer_p_ico {
        height: 15px;
        width: 15px;
      }
    }
  }
</style>