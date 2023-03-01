<template>
   <div class="login-box">
      <h1>SV3-Template</h1>
      <el-form
         ref="ruleFormRef"
         class="login-form"
         :model="userInfo"
         :rules="rules"
         show-message
         center
      >
         <el-form-item prop="username">
            <el-input
               v-model="userInfo.username"
               :prefix-icon="User"
               placeholder="账号"
            />
         </el-form-item>
         <el-form-item prop="password">
            <el-input
               v-model="userInfo.password"
               :prefix-icon="Lock"
               type="password"
               placeholder="密码"
            />
         </el-form-item>
         <el-form-item>
            <el-button type="primary" style="width: 100%" @click="userLogin"
               >登录</el-button
            >
         </el-form-item>
         <div class="center">
            <el-link type="success" @click="toHome()">返回首页</el-link>
         </div>
      </el-form>
   </div>
</template>

<script lang="ts" setup>
import { User, Lock } from '@element-plus/icons-vue';
import { reactive } from 'vue';
import type { FormRules } from 'element-plus';
import router from '@/router';
import { useUserStore } from '@/store/modules/user';

const userStore = useUserStore();

const userInfo = reactive({
   username: '',
   password: '',
});
const rules = reactive<FormRules>({
   username: [
      {
         required: true,
         message: '请输入用户名',
         trigger: 'blur',
      },
   ],
   password: [
      {
         required: true,
         message: '请输入密码',
         trigger: 'blur',
      },
   ],
});
function userLogin() {
   userStore.storeUserLogin(userInfo).then(() => {
      toHome();
   });
}

function toHome() {
   router.push('/home');
}
</script>

<style lang="scss" scoped>
.login-form {
   width: 20vw;
   height: max-content;
}

.login-box {
   h1 {
      color: gray;
   }

   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   height: 100vh;
}

.center {
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 5px 0;
   width: 100%;
   height: max-content;
}
</style>
