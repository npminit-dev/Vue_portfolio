<script setup lang="ts">
  const handleShowCV = () => window.open('/Jorge Balsamo - Desarrollador Web_Mobile - CV.pdf')
  const { targetIsVisible } = defineProps<{ targetIsVisible:boolean }>()
</script>

<template>
  <div id="contact_me">
    <img id="contact_me_img" src="/me.png" alt="A grayscales png image of myself"/>
    <div id="contact_me_cv" @click="handleShowCV" :class="{ fadein_up: targetIsVisible }">
      <p id="contact_me_cv_p">Check out my CV to learn more about my experience and skills.</p>
      <v-icon id="contact_me_cv_ico" name="bi-eye-fill"></v-icon>
    </div>
  </div>
</template>

<style scoped>
#contact_me {

  min-height: calc(100vh - 39px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (width < 769px) {
    min-height: unset;
    height: fit-content;
    padding: 20px 0;
  }

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

    filter: grayscale(1);
    transition-duration: 400ms;
  }
  
  #contact_me_img:has(+ #contact_me_cv:hover) {
    filter: grayscale(0);
    transform: scale(1.05)
  }

  #contact_me_cv {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 20px;
    max-width: 200px;
    cursor: pointer;
    
    #contact_me_cv_p {
      text-align: center;
      font-weight: 300;
      transition-duration: 200ms;
    }

    #contact_me_cv_ico {
      height: 50px;
      width: 50px;
      transition-duration: 200ms;
    }

    &:hover > #contact_me_cv_p {
      text-decoration: underline solid var(--text);
    }

    &:hover > #contact_me_cv_ico {
      transform: scale(1.1);
      fill: var(--highlight);
    }
  }
}

.fadein_up {
  animation: fadein_up 500ms ease-out forwards !important;
}
</style>