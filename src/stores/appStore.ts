import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('appstore', () => {

  let soundsEnabled = ref(false);
  
  function setSound(isSoundEnabled:boolean) {
    soundsEnabled.value = isSoundEnabled
  }

  return { soundsEnabled, setSound }
})
