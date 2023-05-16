<template>
   <el-menu default-active="/" mode="horizontal" :ellipsis="false">
      <el-menu-item index="/" router>SV3-Template</el-menu-item>
      <div class="flex-grow"></div>
      <el-menu-item index="/document" @click="toCourse">
         <i-ep-document></i-ep-document>
         文档
      </el-menu-item>
      <el-menu-item index="/course" @click="toCourse">
         <i-ep-edit></i-ep-edit>
         教程
      </el-menu-item>
      <el-menu-item v-show="!userIsLogin" index="/login">登录</el-menu-item>
      <div
         v-show="userIsLogin"
         disabled
         class="menu-button"
         @click="debounceLogOut"
      >
         退出登录
      </div>
      <el-menu-item disabled class="username"
         ><i-ep-user></i-ep-user>{{ username }}</el-menu-item
      >
      <div class="setting" @click="openSetting">
         <i-ep-setting></i-ep-setting>
      </div>
   </el-menu>
   <el-drawer v-model="showSetting" :show-close="false" :with-header="false">
      <div class="settingHeader">
         <h1>项目配置</h1>
         <i-ep-close class="closeButton" @click="closeSetting"></i-ep-close>
      </div>
      <SettingDrawer></SettingDrawer>
   </el-drawer>
</template>

<script lang="ts" setup>
import SettingDrawer from '@/layout/components/SettingDrawer.vue';
import { debounce } from '@/hooks/utils';
import { useUserStoreHook } from '@/store/modules/user';
import { ref } from 'vue';

// 退出登录控制模块
const store = useUserStoreHook();
const username = store.username;
const userIsLogin = store.isLogin();
const logout = store.logOut;
let debounceLogOut = debounce(logout, 200);

// setting相关控制模块
let showSetting = ref(false);
const openSetting = function () {
   showSetting.value = true;
};
const closeSetting = function () {
   showSetting.value = false;
};

// 前往文档页面
const toDocument = () => {
   window.open('https://sv3-docs.snowhouse.space/');
};

// 前往教程页面
const toCourse = () => {
   window.open('https://sv3-docs.snowhouse.space/course/sv3/');
};
</script>

<style scoped lang="scss">
.flex-grow {
   flex-grow: 1;
}

.username {
   color: brown;
   cursor: default;
   opacity: 1;
}

.menu-button {
   display: flex;
   align-items: center;
   margin: 0 5px;
   font-size: var(--el-menu-item-font-size);
   color: brown;
   opacity: 1;
   cursor: pointer;
}

.setting {
   display: flex;
   align-items: center;
   margin: 0 5px;
   cursor: pointer;
   color: var(--font-color);
}

.settingHeader {
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 50px;
   color: var(--font-color);

   .closeButton {
      cursor: pointer;
   }
}
</style>
