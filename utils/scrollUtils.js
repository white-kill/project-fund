import { ref } from 'vue';
import * as _ from 'lodash'; 

export function useNavScroll(options = {}) {
  const maxScroll = options.maxScroll || 100;
  const opacitys = ref(0);

  const onScroll = _.throttle((event) => {
    const scrollTop = event.detail.scrollTop;
    let opacity = scrollTop / maxScroll;
    opacity = Math.min(Math.max(opacity, 0), 1);
    opacitys.value = opacity;
  }, 100);

  return {
    onScroll,
    opacitys
  };
}