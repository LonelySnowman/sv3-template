import { defineStore } from 'pinia';
import { AppState } from './types';

export const useHomeStore = defineStore(
   // 唯一ID
   'home',
   {
      state: () => ({
         title: 'sv3-template',
         subTitle: '简洁易懂的Vue3快速开发模板',
      }),
      getters: {},
      actions: {
         updateInfo(partial: Partial<AppState>) {
            this.$patch(partial);
         },
      },
   }
);
