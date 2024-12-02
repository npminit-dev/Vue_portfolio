<script setup lang="ts">
import { useAnimatedPath } from '@/composables/useAnimatedPath';
import { colors } from '@/Constants';

const { lineRef } = useAnimatedPath({ delay: 1500, duration: 500, easings: 'easeIn', delFromBehind: true, repeat: 1 })
const { lineRef: lineRefUp } = useAnimatedPath({ delay: 1000, duration: 500, easings: 'easeIn', delFromBehind: true, repeat: 1 })
const { lineRef: lineRefLeft } = useAnimatedPath({ delay: 1250, duration: 500, easings: 'easeIn', delFromBehind: true, repeat: 1 })
const { lineRef: lineRefBottom } = useAnimatedPath({ delay: 750, duration: 500, easings: 'easeIn', delFromBehind: true, repeat: 1 })
const { lineRef: lineRefBottomRight } = useAnimatedPath({ delay: 1250, duration: 500, easings: 'easeIn', delFromBehind: true, repeat: 1 })
const { lineRef: lineRefTopRight } = useAnimatedPath({ delay: 750, duration: 500, easings: 'easeIn', delFromBehind: true, repeat: 1 })
const { lineRef: lineRefTopLeft } = useAnimatedPath({ delay: 1000, duration: 500, easings: 'easeIn', delFromBehind: true, repeat: 1 })
const { lineRef: lineRefBottomLeft } = useAnimatedPath({ delay: 500, duration: 500, easings: 'easeIn', delFromBehind: true, repeat: 1 })

</script>

<template>
  <div id="me_left_svgbox">
    <svg class="path" id='me_left_svgbox_rightsvg' width="385" height="134" viewBox="0 0 385 134" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path 
        ref="lineRef"
        d="M383.958 19.9888L291.131 3.4774C271.045 -1.79723 228.144 2.99511 217.228 64.3615C206.313 125.728 162.093 135.051 141.347 132.042C117.188 128.765 72.221 105.961 85.6301 40.9538C99.0392 -24.0535 34.8004 3.83238 1.00477 25.9012"
        :stroke="colors.TEXT"
        stroke-width="2" 
      />
    </svg>
    <svg class="path" id="me_left_svgbox_upsvg" width="55" height="384" viewBox="0 0 55 384" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path 
        ref="lineRefUp"
        d="M18.0001 1C13.6667 38.1667 12.0001 123.4 40.0001 167C68.0001 210.6 46.6667 247.167 32.5 260C22.3333 270 1.80001 294.8 1.00001 314C0.200005 333.2 14 338.333 21 338.5C28.5 339.333 39 344.7 21 359.5C3 374.3 10.8333 381.333 17 383"
        :stroke="colors.TEXT"
        stroke-width="2" 
      />
    </svg>
    <svg class="path" id="me_left_svgbox_leftsvg" width="383" height="25" viewBox="0 0 383 25" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path 
        ref="lineRefLeft"
        d="M0.5 12.4999C34.3333 3.83323 119.6 -8.30011 190 12.4999C260.4 33.2999 347.333 21.1666 382 12.4999"
        :stroke="colors.TEXT"
        stroke-width="2" 
      />
    </svg>
    <svg class="path" id="me_left_svgbox_bottomsvg" width="59" height="383" viewBox="0 0 59 383" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path 
        ref="lineRefBottom"
        d="M29.5002 382C18.3335 367.667 -1.19983 325.5 10.0002 271.5C24.0002 204 67.0001 184.5 56.0001 122C45.0001 59.5 8.12007 60.2328 2.50012 41.5C-3.5 21.5 9.00012 5.5 21.0001 1"
        :stroke="colors.TEXT"
        stroke-width="2" 
      />
    </svg>
    <svg class="path" id="me_left_svgbox_bottomrightsvg" width="273" height="276" viewBox="0 0 273 276" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        ref=lineRefBottomRight
        d="M134 134.5C120.667 142 91.1999 150.8 79.9999 126C65.9999 95.0002 91.9999 75.5002 99.9999 90.0002C108 104.5 70 105.5 61 94C53.8 84.8 46.6667 59.8333 44 48.5C40.6667 33.3333 27.3 2.6 0.5 1"
        :stroke="colors.TEXT"
        stroke-width="2"
      />
    </svg>
    <svg class="path" id="me_left_svgbox_toprightsvg" width="133" height="137" viewBox="0 0 133 137" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        ref='lineRefTopRight'
        d="M132.5 0.5C120.5 0.5 92.7 6.5 77.5 30.5C62.3 54.5 61.5 76.5 60.5 85.5C58.6227 102.396 46.4 136.1 0 136.5"
        :stroke="colors.TEXT"
        stroke-width="2"
    />
    </svg>
    <svg class="path" id="me_left_svgbox_topleftsvg" width="133" height="137" viewBox="0 0 133 137" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        ref='lineRefTopLeft'
        d="M0.5 1C14.1667 3.33333 43.5 9 51.5 45.5C61.5386 91.301 111.167 116.667 136 133.5"
        :stroke="colors.TEXT"
        stroke-width="2"
    />
    </svg>
    <svg class="path" id="me_left_svgbox_bottomleftsvg" width="135" height="139" viewBox="0 0 135 139" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path         
        ref='lineRefBottomLeft'
        d="M1 134.5C9.83333 141.333 30.2 143.1 41 95.4998C51.8 47.8998 76.8333 42.3331 88 45.4998C97 47.5 109.2 45.3 104 30.5C98.8 15.7 122.167 4.33333 134.5 0.5"
        :stroke="colors.TEXT"
        stroke-width="2"
      />
    </svg>
  </div>
</template>

<style scoped>
#me_left_svgbox {
  position: relative;
  height: 150px !important;
  width: 150px !important;

  #me_left_svgbox_rightsvg {
    transform: translateY(50px) translateX(75px)
  }

  #me_left_svgbox_upsvg {
    transform: translateY(-310px) translateX(60px);
  }

  #me_left_svgbox_leftsvg {
    transform: translateY(60px) translateX(-310px);
  }

  #me_left_svgbox_bottomsvg {
    transform: translateY(75px) translateX(50px)
  }

  #me_left_svgbox_bottomrightsvg {
    transform: translateY(75px) translateX(70px)
  }

  #me_left_svgbox_toprightsvg {
    transform: translateY(-60px) translateX(70px)
  }

  #me_left_svgbox_topleftsvg {
    transform: translateY(-60px) translateX(-60px)
  }

  #me_left_svgbox_bottomleftsvg {
    transform: translateY(75px) translateX(-60px)

  }
}
.path {
  position: absolute;
}


</style>