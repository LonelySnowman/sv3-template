import { defineStore } from 'pinia';
import { UserState } from './types';
import pinia from '@/store';
import { refreshUserInfo, userLogin } from '@/api/user';
import router from '@/router';

export const useUserStoreHook = defineStore(
   // 唯一ID
   'User',
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
            if (this.username == '游客' && this.accessToken != '') {
               refreshUserInfo({
                  accessToken: this.accessToken,
               })
                  .then((res) => {
                     this.username = res.username;
                     this.roles = res.roles;
                     this.accessToken = res.accessToken;
                  })
                  .catch(() => {
                     this.accessToken = '';
                  });
            }
         },
         // 判断用户是否登录
         isLogin(): boolean {
            if (this.username == '游客' && this.accessToken == '') return false;
            else return true;
         },
         // 验证用户身份
         authStatus(allowStatus: Array<string>): boolean {
            for (const role of this.roles) {
               if (allowStatus.includes(role)) return true;
            }
            return false;
         },
         // 退出登录
         logOut() {
            this.username = '游客';
            this.accessToken = '';
            this.roles = [''];
            router.push('/login');
         },
      },
      persist: {
         key: 'userInfo',
         storage: sessionStorage,
         paths: ['accessToken'],
      },
   }
);

export function useUserStore() {
   return useUserStoreHook(pinia);
}
