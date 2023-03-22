import { defineStore } from 'pinia';
import pinia from '@/store';
import { SettingState } from './types';

export const useSettingStoreHook = defineStore('Setting', {
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
         const element = document.getElementsByTagName('html')[0];
         element.setAttribute('data-theme', val ? 'light' : 'dark');
      },
      loadingSetting() {
         const element = document.getElementsByTagName('html')[0];
         element.setAttribute('data-theme', this.theme ? 'light' : 'dark');
      },
   },
   persist: {
      key: 'setting',
      storage: localStorage,
      paths: ['theme'],
   },
});

export function useSettingStore() {
   return useSettingStoreHook(pinia);
}
