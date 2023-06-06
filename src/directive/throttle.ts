export default {
   mounted(el, binding) {
      let timer: null | number = null;
      el.addEventListener('click', () => {
         if (!timer) {
            const self = this;
            timer = window.setTimeout(() => {
               binding.value.apply(self);
               timer && window.clearTimeout(timer);
            }, binding.arg || 1000);
         }
      });
   },
};
