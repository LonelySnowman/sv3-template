import { defineStore } from 'pinia';
import { UserState } from './types';

export const useUserStore = defineStore(
   // 唯一ID
   'home',
   {
      state: () => ({
         username: '',
         accessToken: '',
         roles: ['common'],
      }),
      getters: {},
      actions: {
         updateInfo(partial: Partial<UserState>) {
            this.$patch(partial);
         },
      },
      persist: {
         key: 'accessToken',
         storage: sessionStorage,
         paths: ['accessToken'],
      },
   }
);
