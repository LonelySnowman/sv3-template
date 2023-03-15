export function debounce(fn: () => void, delay = 200): () => void {
   let timer: null | number = null;
   return function (this: object, ...args: any) {
      timer && window.clearTimeout(timer);
      const self = this;
      timer = window.setTimeout(() => {
         fn.apply(self, args);
      }, delay);
   };
}

export function throttle(fn: () => void, delay = 200): () => void {
   let timer: null | number = null;
   return function (this: object, ...args: any) {
      if (!timer) {
         const self = this;
         timer = window.setTimeout(() => {
            fn.apply(self, args);
            timer && window.clearTimeout(timer);
         }, delay);
      }
   };
}
