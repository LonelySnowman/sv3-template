export default {
   beforeMount(el, binding) {
      el.$data_src = binding.value;
   },
   mounted(el) {
      const io = new IntersectionObserver((entries) => {
         const realSrc = el.$data_src;
         entries[0].isIntersecting && realSrc && (el.src = realSrc);
      });
      el.$io = io;
      io.observe(el);
   },
   updated(el, binding) {
      el.$data_src = binding.value;
   },
   unmounted(el) {
      el.$io.disconnect();
   },
};
