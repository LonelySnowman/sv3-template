<template>
   <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      :ellipsis="false"
      router
   >
      <el-menu-item index="/">SV3-Template</el-menu-item>
      <div class="flex-grow"></div>
      <el-menu-item index="/document">
         <i-ep-document></i-ep-document>
         文档
      </el-menu-item>
      <el-menu-item index="/edit">
         <i-ep-edit></i-ep-edit>
         教程
      </el-menu-item>
      <el-menu-item index="/login" @click="getInfo">登录</el-menu-item>
   </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { userLogin } from '@/api/user';
const activeIndex = ref('1');

const getInfo = () => {
   console.log('OK');
   const info = userLogin().then((res) => {
      console.log(res);
   });
};
</script>

<style scoped>
.flex-grow {
   flex-grow: 1;
}

.login {
   padding: 5px;
   width: max-content;
}
</style>
