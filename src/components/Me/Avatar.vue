<script setup lang="ts">

</script>

<template>
  <div id="me_left_imgbox">
    <img id="me_left_imgbox_avatar" src="../../assets/avatar.webp" />
    <div id="me_left_imgbox_shine"></div>
    <div id="me_left_imgbox_ring"></div>
  </div>
</template>

<style scoped>
#me_left_imgbox {
  position: absolute;
  height: 150px !important;
  width: 150px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: fit-content;
  animation: shine 3s cubic-bezier(.99,0,.95,.32) forwards;

  #me_left_imgbox_avatar {
    position: absolute;
    height: 100%;
    width: 100%;
    border: 1px solid var(--text);
    border-radius: 100%;
    object-fit: cover;
  }

  #me_left_imgbox_shine {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: var(--text);
    border-radius: 100%;
    animation: disapear 500ms ease-out 3s forwards
  }

  #me_left_imgbox_ring {
    position: absolute;
    height: 100%;
    width: 100%;
    border: 1px solid var(--text);
    border-radius: 100%;
    animation: expand 1.5s cubic-bezier(0, .99, .89, .99) forwards 3s, disapear 500ms linear 4.5s forwards
  }
}

@keyframes shine {
    0% {
      filter: blur(5px);
      transform: scale(.05);
    } 
    
    99% {
      transform: scale(1.5);
    }
    100% {
      filter: none;
    }
  }

  @keyframes expand {
    to {
      transform: scale(3);
      filter: opacity(.5);
    }
  }

  @keyframes blinking {
    from {
      border-color: #eaeaea27;
      filter: opacity(1)
    }
    to {
      border-color: #eaeaea27;
      filter: opacity(0)
    }
  }

  @keyframes disapear {
    to {
      filter: opacity(0)
    }
  }
</style>