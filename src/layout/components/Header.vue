<template>
   <el-menu default-active="/" mode="horizontal" :ellipsis="false" router>
      <el-menu-item index="/">SV3-Template</el-menu-item>
      <div class="flex-grow"></div>
      <el-menu-item index="/document">
         <i-ep-document></i-ep-document>
         文档
      </el-menu-item>
      <el-menu-item index="/course">
         <i-ep-edit></i-ep-edit>
         教程
      </el-menu-item>
      <el-menu-item v-show="!userIsLogin" index="/login">登录</el-menu-item>
      <div v-show="userIsLogin" disabled class="logOut" @click="logout">
         退出登录
      </div>
      <el-menu-item disabled class="username"
         ><i-ep-user></i-ep-user>{{ username }}</el-menu-item
      >
   </el-menu>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store/modules/user';
const store = useUserStore();
const username = store.username;
const userIsLogin = store.isLogin();
const logout = store.logOut;
</script>

<style scoped>
.flex-grow {
   flex-grow: 1;
}

.username {
   color: brown;
   cursor: default;
   opacity: 1;
}

.logOut {
   display: flex;
   align-items: center;
   margin: 0 5px;
   font-size: var(--el-menu-item-font-size);
   color: brown;
   opacity: 1;
   cursor: pointer;
}
</style>
