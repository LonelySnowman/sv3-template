import { defineStore } from 'pinia';
import { AppState } from './types';

export const useHomeStore = defineStore(
   // 唯一ID
   'home',
   {
      state: () => ({
         title: 'sv3-template',
         subTitle: 'Vue3 + Vite3.x + TypeScript + Pinia大厂开发必备脚手架',
         theme: 'bright',
      }),
      getters: {},
      actions: {
         updateSettings(partial: Partial<AppState>) {
            this.$patch(partial);
         },
         toggleTheme(dark: boolean) {
            if (dark) {
               this.theme = 'dark';
               document.documentElement.classList.add('dark');
            } else {
               this.theme = 'light';
               document.documentElement.classList.remove('dark');
            }
         },
      },
      persist: {
         key: 'theme',
         storage: localStorage,
         paths: ['theme'],
      },
   }
);
