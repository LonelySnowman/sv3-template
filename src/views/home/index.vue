<template>
   <div class="home">
      <div class="title">{{ userInfo.title }}</div>
      <div class="subTitle" @click="getInfo">{{ userInfo.subTitle }}</div>
      <div></div>
   </div>
</template>

<script lang="ts" setup>
import { useHomeStore } from '@/store';
const store = useHomeStore();
import { userLogin } from '@/api/user';

const userInfo = {
   title: store.title,
   subTitle: store.subTitle,
};

const getInfo = () => {
   console.log('OK');
   const info = userLogin().then((res) => {
      console.log(res);
   });
};
</script>

<style lang="scss" scoped>
.home {
   height: 100vh;
   width: 100vw;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
}
</style>
