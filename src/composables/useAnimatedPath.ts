import { ref, onMounted, watch } from 'vue';
import { useMotion } from '@vueuse/motion';
import type { StrokeProps } from '@/typedefs/me';

export function useAnimatedPath(props: StrokeProps) {
  const lineRef = ref<SVGPathElement | null>(null);
  const pathLength = ref(0);

  onMounted(() => {
    if (lineRef.value) {
      pathLength.value = Math.ceil(lineRef.value.getTotalLength());
      console.log('Path length:', pathLength.value);
    }
  });

  watch(pathLength, async (newLength) => {
    if (newLength > 0 && lineRef.value) {
      const { apply } = useMotion(lineRef, {
        initial: {
          strokeDasharray: newLength,
          strokeDashoffset: newLength,
          transitionTimingFunction: 'ease-out',
        },
        enter: {
          strokeDasharray: newLength,
          strokeDashoffset: props.delFromBehind ? (0 - newLength) : 0,
          transition: {
            duration: props.duration,
            easing: props.easings,
          },
        },
      });
      await apply('enter');
    }
  });

  return { lineRef };
}
