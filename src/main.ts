import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import pinia from '@/store';
import './styles/_reset.scss';
import './styles/_dark.scss';

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app');
