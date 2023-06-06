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
         <el-button type="primary" @click="debounceLogOut">退出登录</el-button>
      </div>
   </div>
</template>

<script setup lang="ts">
import { useSettingStoreHook } from '@/store/modules/setting';
import { Sunny, Moon } from '@element-plus/icons-vue';
import { ref } from 'vue';
import { debounce } from '@/utils/utils';
import { useUserStoreHook } from '@/store/modules/user';

let settingStore = useSettingStoreHook();
let themeData = ref(settingStore.theme);
const changeTheme = function (val) {
   settingStore.changeTheme(themeData, val);
};
// 退出登录
const userStore = useUserStoreHook();
const logout = userStore.logOut;
let debounceLogOut = debounce(logout, 200);
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
