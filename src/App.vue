<template>
   <router-view></router-view>
</template>

<script setup>
import { onMounted } from 'vue';
import { useSettingStoreHook } from '@/store/modules/setting';
let settingStore = useSettingStoreHook();
onMounted(() => {
   settingStore.loadingSetting();
});
</script>
