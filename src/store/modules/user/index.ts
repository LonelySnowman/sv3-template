import { defineStore } from 'pinia';
import { UserState } from './types';
import { refreshUserInfo, userLogin } from '@/api/user';

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
         // 用户登录
         storeUserLogin(data) {
            return userLogin(data).then((res) => {
               this.username = res.username;
               this.roles = res.roles;
               this.accessToken = res.accessToken;
               return res;
            });
         },
         // 刷新用户信息
         refreshUserInfo() {
            if (this.username === '游客' && this.accessToken !== '') {
               refreshUserInfo({
                  accessToken: this.accessToken,
               }).then((res) => {
                  this.username = res.username;
                  this.roles = res.roles;
                  this.accessToken = res.accessToken;
               });
            }
         },
      },
      persist: {
         key: 'userInfo',
         storage: sessionStorage,
         paths: ['accessToken'],
      },
   }
);
