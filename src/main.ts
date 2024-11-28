import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import type { IconType } from 'oh-vue-icons/types/icons'
import { addIcons, OhVueIcon } from 'oh-vue-icons'
import { CoLinkedinIn, CoStackoverflow, CoGithub } from "oh-vue-icons/icons";

import { MotionPlugin, type MotionInstance } from '@vueuse/motion'

addIcons(CoLinkedinIn, CoStackoverflow, CoGithub)

const app = createApp(App)

app.component<IconType>('v-icon', OhVueIcon)

app.use(MotionPlugin)
app.use(createPinia())

app.mount('#app')
