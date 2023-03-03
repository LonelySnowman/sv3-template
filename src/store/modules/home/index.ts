import { defineStore } from 'pinia';
import pinia from '@/store';
import { AppState } from './types';

export const useHomeStoreHook = defineStore(
   // 唯一ID
   'Home',
   {
      state: () => ({
         title: 'SV3-Template',
         subTitle: 'Vue3快速开发模板',
         subTitle1: '简洁易懂，文档详细，含脚手架搭建教程',
      }),
      getters: {},
      actions: {
         updateInfo(partial: Partial<AppState>) {
            this.$patch(partial);
         },
      },
   }
);

export function useHomeStore() {
   return useHomeStoreHook(pinia);
}
