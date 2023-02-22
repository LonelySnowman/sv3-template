<template>
   <div class="home">
      <div class="title">{{ userInfo.title }}</div>
      <div class="subTitle">{{ userInfo.subTitle }}</div>
   </div>
</template>

<script lang="ts" setup>
import { useHomeStore } from '@/store';
const store = useHomeStore();

const userInfo = {
   title: store.title,
   subTitle: store.subTitle,
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
