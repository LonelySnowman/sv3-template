<template>
   <div class="main-content">
      <h1>{{ homeInfo.title }}</h1>
      <h3>{{ homeInfo.subTitle }}</h3>
      <h4>{{ homeInfo.subTitle1 }}</h4>
      <div class="prj-dependencies">
         <img
            src="https://img.shields.io/badge/-Vite-E34F26?logo=vite&style=flat-square&logoColor=white"
         />
         <img
            src="https://img.shields.io/badge/-vue3-1572B6?logo=vuedotjs&style=flat-square&logoColor=white"
         />
         <img
            src="https://img.shields.io/badge/-Typescript-oringe?logo=typescript&style=flat-square&logoColor=white"
         />
         <img
            src="https://img.shields.io/badge/-Sass-E34F26?logo=sass&style=flat-square&logoColor=white"
         />
         <img
            src="https://img.shields.io/badge/-Pinia-1572B6?logo=vuedotjs&style=flat-square&logoColor=white"
         />
         <img
            src="https://img.shields.io/badge/-Pnpm-oringe?logo=pnpm&style=flat-square&logoColor=white"
         />
         <img
            src="https://img.shields.io/badge/-ESLint-E34F26?logo=eslint&style=flat-square&logoColor=white"
         />
         <img
            src="https://img.shields.io/badge/-Prettier-1572B6?logo=prettier&style=flat-square&logoColor=white"
         />
         <img
            src="https://img.shields.io/badge/-StyleLint-oringe?logo=stylelint&style=flat-square&logoColor=white"
         />
         <img
            src="https://img.shields.io/badge/-Axios-E34F26?logo=vuedotjs&style=flat-square&logoColor=white"
         />
         <img
            src="https://img.shields.io/badge/-ElementPlus-1572B6?logo=vuedotjs&style=flat-square&logoColor=white"
         />
         <img
            src="https://img.shields.io/badge/-Mock.js-oringe?logo=vuedotjs&style=flat-square&logoColor=white"
         />
      </div>
      <div class="op-button">
         <el-button round size="large" @click="toQuickStart">
            快速开始
            <i-ep-right></i-ep-right>
         </el-button>
         <el-button round size="large" @click="toGitHub">GitHub</el-button>
      </div>
   </div>
</template>

<script lang="ts" setup>
import { useHomeStoreHook } from '@/store/modules/home';
const store = useHomeStoreHook();

const homeInfo = {
   title: store.title,
   subTitle: store.subTitle,
   subTitle1: store.subTitle1,
};

// 跳转到快速开始页面
const toQuickStart = () => {
   window.open('https://sv3-docs.snowhouse.space/guide/sv3/quickstart.html');
};

// 跳转到GitHub页面
const toGitHub = () => {
   window.open('https://github.com/LonelySnowman/sv3-template');
};
</script>

<style lang="scss" scoped>
.main-content {
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: 50px;
   height: max-content;
   flex-direction: column;

   h1 {
      font-size: 3.5rem;
      color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
      background-image: linear-gradient(to right, #42d392, #589bda);
   }

   h3 {
      font-size: 4rem;
      color: #213547;
   }

   h4 {
      font-size: 2rem;
      color: #767676;
   }

   .prj-dependencies {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: row wrap;
      height: max-content;

      * {
         margin: 5px;
      }
   }

   .op-button {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 5px 0;

      > :first-child {
         color: white;
         background-color: #42b883;
      }

      > :last-child {
         background-color: #f1f1f1;
      }
   }
}
</style>
