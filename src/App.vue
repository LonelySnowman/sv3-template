<template>
   <router-view></router-view>
</template>

<script setup>
import { onMounted } from 'vue';
import { useSettingStore } from '@/store/modules/setting';
let settingStore = useSettingStore();
onMounted(() => {
   settingStore.loadingSetting();
});
</script>
