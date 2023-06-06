export default {
   mounted(el, binding) {
      let timer: null | number = null;
      el.addEventListener('click', () => {
         timer && window.clearTimeout(timer);
         const self = this;
         timer = window.setTimeout(() => {
            binding.value.apply(self);
         }, binding.arg || 1000);
      });
   },
};
