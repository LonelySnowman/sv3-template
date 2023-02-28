import { defineStore } from 'pinia';
import { UserState } from './types';
import { userLogin } from '@/api/user';

export const useUserStore = defineStore(
   // 唯一ID
   'user',
   {
      state: () => ({
         username: '游客',
         accessToken: '',
         roles: ['common'],
      }),
      getters: {},
      actions: {
         updateInfo(partial: Partial<UserState>) {
            this.$patch(partial);
         },
         storeUserLogin(data) {
            return userLogin(data).then((res) => {
               this.username = res.username;
               this.roles = res.roles;
               this.accessToken = res.accessToken;
               return res;
            });
         },
      },
      persist: {
         key: 'accessToken',
         storage: sessionStorage,
         paths: ['accessToken'],
      },
   }
);
