import { ref, onMounted, watch } from 'vue';
import { useMotion } from '@vueuse/motion';
import type { AnimatedStrokeProps } from '@/typedefs/me';

export function useAnimatedPath(props: AnimatedStrokeProps) {
  const lineRef = ref<SVGPathElement | null>(null);
  const pathLength = ref(0);

  onMounted(() => {
    if (lineRef.value) pathLength.value = Math.ceil(lineRef.value.getTotalLength());
  });

  watch(pathLength, async (newLength) => {
    if (newLength > 0 && lineRef.value) {
      const { apply } = useMotion(lineRef, {
        initial: {
          strokeDasharray: newLength,
          strokeDashoffset: newLength,
        },
        enter: {
          strokeDasharray: newLength,
          strokeDashoffset: props.delFromBehind ? (0 - newLength) : 0,
          transition: {
            duration: props.duration,
            ease: props.easings,
            delay: props.delay ?? 0,
            repeat: props.repeat ?? 0,
            repeatDelay: 500
          }
        },
      });
      await apply('enter');
    }
  });
  return { lineRef };
}
