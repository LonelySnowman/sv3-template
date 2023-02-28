<template>
   <el-container>
      <el-header>
         <Header></Header>
      </el-header>
      <el-main>
         <router-view></router-view>
      </el-main>
   </el-container>
</template>

<script lang="ts" setup>
import Header from './components/header/index.vue';
</script>
