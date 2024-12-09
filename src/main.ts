import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import { register } from 'swiper/element/bundle';
register()

import type { IconType } from 'oh-vue-icons/types/icons'
import { addIcons, OhVueIcon } from 'oh-vue-icons'
import { CoLinkedinIn, CoStackoverflow, CoGithub, CoJava, 
  CoReact, RiVuejsLine, CoJavascript, CoHtml5Shield, CoCss3Shiled, 
  IoLogoNodejs, CoNextJs, CoExpo, CoTypescript, HiSolidDatabase, CoDocker, FaFigma, IoBulb,
  SiReactrouter, SiTailwindcss, BiBootstrapFill, SiAntdesign, CoMysql, SiSqlite, SiMicrosoftsqlserver,
  AiZotero, SiExpress, SiReactquery, GiJesterHat, SiCypress, CoRedux, SiSemanticuireact,
  BiChevronCompactLeft, BiChevronCompactRight, CoMongodb, BiEyeFill
} from "oh-vue-icons/icons";

import { MotionPlugin } from '@vueuse/motion'

addIcons(
  CoLinkedinIn,
  CoStackoverflow,
  CoGithub,
  CoReact,
  RiVuejsLine,
  CoJavascript,
  CoHtml5Shield,
  CoCss3Shiled,
  IoLogoNodejs,
  CoNextJs,
  CoExpo,
  CoTypescript,
  HiSolidDatabase,
  CoDocker,
  FaFigma,
  IoBulb,
  SiTailwindcss,
  SiReactrouter,
  BiBootstrapFill,
  SiAntdesign,
  CoMysql,
  SiSqlite,
  SiMicrosoftsqlserver,
  AiZotero,
  SiExpress,
  SiReactquery,
  GiJesterHat,
  SiCypress,
  CoRedux,
  SiSemanticuireact,
  BiChevronCompactLeft, 
  BiChevronCompactRight,
  CoMongodb,
  BiEyeFill
)

const app = createApp(App)

app.component<IconType>('v-icon', OhVueIcon)

app.use(MotionPlugin)
app.use(createPinia())

app.mount('#app')
