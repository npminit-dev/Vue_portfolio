<script setup lang="ts">

</script>

<template>
  <div id="contact_me">
    <img id="contact_me_img" src="/me.png" />
  </div>
</template>

<style scoped>
#contact_me {

  min-height: calc(100vh - 39px);
  display: flex;
  align-items: center;
  justify-content: center;

  #contact_me_img {
    -webkit-mask-image:
      linear-gradient(to bottom, black 70%, transparent 100%),
      linear-gradient(to left, black 95%, transparent 100%),
      linear-gradient(to right, black 95%, transparent 100%);
    mask-image:
      linear-gradient(to bottom, black 70%, transparent 100%),
      linear-gradient(to left, black 95%, transparent 100%),
      linear-gradient(to right, black 95%, transparent 100%);

    -webkit-mask-composite: destination-in;
    mask-composite: intersect;

    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%;
  }
}
</style>