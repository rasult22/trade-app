import { useAppStore } from 'src/stores/app';
import { computed, ref } from 'vue';
const selectedStyle = ref('');
const requestText = ref('');
const image = ref('');

export function useProcess() {
  const appStore = useAppStore();
  const styles = computed(() => appStore.getStyles);
  return {
    styles,
    selectedStyle,
    requestText,
    image,
  };
}
