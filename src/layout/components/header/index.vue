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
      <el-menu-item index="/login">登录</el-menu-item>
      <el-menu-item disabled class="username"
         ><i-ep-user></i-ep-user>游客</el-menu-item
      >
   </el-menu>
</template>

<style scoped>
.flex-grow {
   flex-grow: 1;
}

.username {
   color: brown;
   cursor: default;
}
</style>
