import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import pinia from './store';
import './styles/_reset.scss';

const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#app');
