import { createPinia } from 'pinia';
import { useHomeStore } from './modules/home';

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export { useHomeStore };
export default pinia;
