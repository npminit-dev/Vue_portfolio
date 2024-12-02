import type { Easing } from "@vueuse/motion"

export type AnimatedStrokeProps = {
  duration:number,
  easings:Easing,
  delFromBehind:boolean,
  delay?:number,
  repeat?:number
}

export type SVGProps = {
  strokeColor:string,
  height: number,
  width: number
}