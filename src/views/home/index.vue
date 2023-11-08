<template>
   <div class="main-content">
      <span class="title">{{ homeInfo.title }}</span>
      <span class="subtitle">{{ homeInfo.subTitle }}</span>
      <span class="content">{{ homeInfo.subTitle1 }}</span>
      <ShieldsIcon></ShieldsIcon>
      <div class="op-button">
         <el-button round size="large" type="primary">
            <a
               target="_blank"
               href="https://sv3-docs.snowhouse.space/guide/sv3/quickstart.html"
            >
               快速开始
               <i-ep-right></i-ep-right>
            </a>
         </el-button>
         <el-button round size="large">
            <a
               href="https://github.com/LonelySnowman/sv3-template"
               target="_blank"
            >
               GitHub
            </a>
         </el-button>
      </div>
   </div>
</template>

<script lang="ts" setup>
import ShieldsIcon from '@/views/home/components/ShieldsIcon.vue';
import { useHomeStoreHook } from '@/store/modules/home';
const store = useHomeStoreHook();

const homeInfo = {
   title: store.title,
   subTitle: store.subTitle,
   subTitle1: store.subTitle1,
};
</script>

<style lang="scss" scoped>
.main-content {
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   height: 100vh;
   a {
      display: flex;
      align-items: center;
   }
   .title {
      font-size: 60px;
      font-weight: 700;
      color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
      background-image: linear-gradient(to right, #f2a829, #ffc76b);
   }
   .subtitle {
      font-size: 40px;
      font-weight: 500;
      color: #213547;
   }
   .content {
      font-size: 30px;
      color: #767676;
   }
   .op-button {
      display: flex;
      justify-content: center;
      align-items: center;
      button:first-child {
         a {
            color: #ffffff;
         }
      }
      > :last-child {
         background-color: #f1f1f1;
      }
   }
}
</style>
