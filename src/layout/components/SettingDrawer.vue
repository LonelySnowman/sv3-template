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
      </div>
   </div>
</template>

<script setup lang="ts">
import { useSettingStore } from '@/store/modules/setting';
import { Sunny, Moon } from '@element-plus/icons-vue';
import { ref } from 'vue';

let settingStore = useSettingStore();
let themeData = ref(settingStore.theme);
const changeTheme = function (val) {
   settingStore.changeTheme(themeData, val);
};
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
