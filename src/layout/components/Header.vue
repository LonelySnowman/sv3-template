<template>
   <div class="header">
      <el-menu default-active="/" mode="horizontal" :ellipsis="false" router>
         <el-menu-item index="/">SV3-Template</el-menu-item>
         <el-menu-item index="">
            <a href="https://sv3-docs.snowhouse.space/" target="_blank">
               <i-ep-document />
               文档
            </a>
         </el-menu-item>
         <el-menu-item index="">
            <a
               href="https://sv3-docs.snowhouse.space/course/sv3/"
               target="_blank"
            >
               <i-ep-edit />
               教程
            </a>
         </el-menu-item>
      </el-menu>
      <div class="flex-grow"></div>
      <div class="flex-center m05 color-dark-black">
         <i-ep-user />
         {{ username }}
      </div>
      <div
         class="flex-center m05 color-dark-black setting"
         @click="openSetting"
      >
         <i-ep-setting />
      </div>
   </div>
   <el-drawer
      v-model="showSetting"
      :show-close="false"
      :with-header="false"
      size="300"
   >
      <div class="settingHeader">
         <h1>项目配置</h1>
         <i-ep-close class="closeButton" @click="closeSetting"></i-ep-close>
      </div>
      <SettingDrawer></SettingDrawer>
   </el-drawer>
</template>

<script lang="ts" setup>
import SettingDrawer from '@/layout/components/SettingDrawer.vue';
import { useUserStoreHook } from '@/store/modules/user';
import { ref } from 'vue';

// 获取用户信息
const userStore = useUserStoreHook();
const username = userStore.username;

// setting相关控制模块
let showSetting = ref(false);
const openSetting = function () {
   showSetting.value = true;
};
const closeSetting = function () {
   showSetting.value = false;
};
</script>

<style scoped lang="scss">
a {
   display: flex;
   align-items: center;
}

.header {
   display: flex;
   width: 100%;
   height: 100%;

   .menu {
      width: max-content;
      height: 100%;
   }
   // 去除菜单底部边框
   .el-menu--horizontal {
      border-bottom: none;
   }
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
   cursor: pointer;
}

.settingHeader {
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 50px;
   color: var(--sv3-color-dark-black);

   .closeButton {
      cursor: pointer;
   }
}
</style>
