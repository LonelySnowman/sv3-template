<template>
   <div class="settingContent">
      <div>
         <el-divider> 主题配置 </el-divider>
         <el-switch
            v-model="themeData"
            inline-prompt
            :active-icon="Sunny"
            :inactive-icon="Moon"
            size="large"
            @change="changeTheme"
         />
         <el-divider></el-divider>
         <el-button type="primary" @click="logOut">退出登录</el-button>
      </div>
   </div>
</template>

<script setup lang="ts">
import { debounce } from 'lodash';
import { useSettingStoreHook } from '@/store/modules/setting';
import Sunny from '~icons/ep/sunny';
import Moon from '~icons/ep/moon';
import { ref } from 'vue';
import { useUserStoreHook } from '@/store/modules/user';

let settingStore = useSettingStoreHook();
let themeData = ref(settingStore.theme);
const changeTheme = function (val) {
   settingStore.changeTheme(themeData, val);
};
const userStore = useUserStoreHook();
const logOut = debounce(userStore.logOut, 200);
</script>

<style scoped lang="scss">
.settingContent {
   display: flex;
   justify-content: center;
   align-items: center;

   > div {
      display: flex;
      align-items: center;
      width: 100%;
      height: max-content;
      flex-direction: column;
   }
}
</style>
