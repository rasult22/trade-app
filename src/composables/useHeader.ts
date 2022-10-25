import { ref } from 'vue';

const showBackBtn = ref(false);
const title = ref('Логотип');

export default function useHeader() {
  //
  return {
    showBackBtn,
    title,
  };
}
