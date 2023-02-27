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

<script setup>
import Header from '@/layout/header/index.vue';
</script>
