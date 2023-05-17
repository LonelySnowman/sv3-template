<template>
   <div class="prj-dependencies">
      <img v-for="(img, index) in imgList" :key="index" :src="img" alt=" " />
   </div>
</template>

<script setup lang="ts">
const imgList = [
   'https://img.shields.io/badge/-Vite-E34F26?logo=vite&style=flat-square&logoColor=white',
   'https://img.shields.io/badge/-vue3-1572B6?logo=vuedotjs&style=flat-square&logoColor=white',
   'https://img.shields.io/badge/-Typescript-oringe?logo=typescript&style=flat-square&logoColor=white',
   'https://img.shields.io/badge/-Sass-E34F26?logo=sass&style=flat-square&logoColor=white',
   'https://img.shields.io/badge/-Pinia-1572B6?logo=vuedotjs&style=flat-square&logoColor=white',
   'https://img.shields.io/badge/-Pnpm-oringe?logo=pnpm&style=flat-square&logoColor=white',
   'https://img.shields.io/badge/-ESLint-E34F26?logo=eslint&style=flat-square&logoColor=white',
   'https://img.shields.io/badge/-Prettier-1572B6?logo=prettier&style=flat-square&logoColor=white',
   'https://img.shields.io/badge/-StyleLint-oringe?logo=stylelint&style=flat-square&logoColor=white',
   'https://img.shields.io/badge/-Axios-E34F26?logo=vuedotjs&style=flat-square&logoColor=white',
   'https://img.shields.io/badge/-ElementPlus-1572B6?logo=vuedotjs&style=flat-square&logoColor=white',
   'https://img.shields.io/badge/-Mock.js-oringe?logo=vuedotjs&style=flat-square&logoColor=white',
];
</script>

<style scoped lang="scss">
.prj-dependencies {
   display: flex;
   justify-content: center;
   align-items: center;
   flex-flow: row wrap;
   height: max-content;
   img {
      margin: 5px;
   }
}
</style>
