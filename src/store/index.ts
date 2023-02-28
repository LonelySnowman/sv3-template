import { createPinia } from 'pinia';
import { useHomeStore } from '@/store/modules/home';
import { useUserStore } from '@/store/modules/user';

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export { useHomeStore, useUserStore };

export default pinia;
