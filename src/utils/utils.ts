export function debounce(fn: () => any, delay = 200): () => void {
   let timer: null | number = null;
   return function (this: object, ...args: any) {
      timer && window.clearTimeout(timer);
      const self = this;
      timer = window.setTimeout(() => {
         fn.apply(self, args);
      }, delay);
   };
}

export function throttle(fn: () => any, delay = 200): () => void {
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

export function deepClone(target) {
   const hashMap = new WeakMap();
   function isObject(target) {
      return (
         (typeof target == 'object' && target !== null) ||
         typeof target == 'function'
      );
   }
   function clone(target) {
      if (!isObject(target)) return target;
      if (hashMap.has(target)) return hashMap.get(target);
      if ([Date, RegExp].includes(target.constructor)) {
         return new target.constructor(target);
      }
      if (target instanceof Function) {
         return new Function('return ' + target.toString())();
      }
      if (target instanceof Map) {
         const newMap = new Map();
         for (const [key, val] of target) {
            if (isObject(val)) newMap.set(key, clone(val));
            else newMap.set(key, val);
         }
         return newMap;
      }
      if (target instanceof Set) {
         const newSet = new Set();
         for (const val of target) {
            if (isObject(val)) newSet.add(clone(val));
            else newSet.add(val);
         }
         return newSet;
      }
      if (target instanceof Array) {
         const n = target.length;
         const newArray = new Array(n);
         for (let i = 0; i < n; i++) {
            const item = target[i];
            if (isObject(item)) newArray[i] = clone(item);
            else newArray[i] = item;
         }
         return newArray;
      }
      const keys = Reflect.ownKeys(target);
      const newObj = {};
      for (const key of keys) {
         const val = target[key];
         if (isObject(val)) newObj[key] = clone(val);
         else newObj[key] = val;
      }
      hashMap.set(target, newObj);
      return newObj;
   }
   return clone(target);
}
