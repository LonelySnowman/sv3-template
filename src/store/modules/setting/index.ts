import { defineStore } from 'pinia';
import pinia from '@/store';
import { SettingState } from './types';

export const useSettingStore = defineStore('Setting', {
   state: () => ({
      theme: true,
   }),
   getters: {},
   actions: {
      updateInfo(partial: Partial<SettingState>) {
         this.$patch(partial);
      },
      changeTheme(themeData, val) {
         themeData.value = val;
         this.theme = val;
         document.documentElement.setAttribute(
            'data-theme',
            val ? 'light' : 'dark'
         );
      },
      loadingSetting() {
         document.documentElement.setAttribute(
            'data-theme',
            this.theme ? 'light' : 'dark'
         );
      },
   },
   persist: {
      key: 'setting',
      storage: localStorage,
      paths: ['theme'],
   },
});

export function useSettingStoreHook() {
   return useSettingStore(pinia);
}
