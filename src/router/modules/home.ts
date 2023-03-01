import { RouteRecordRaw } from 'vue-router';

export default {
   path: '/',
   redirect: '/home',
   name: 'Home',
   component: () => import('@/layout/index.vue'),
   meta: {
      role: ['common', 'admin'],
   },
   children: [
      {
         path: '/home',
         name: 'HomePage',
         component: () => import('@/views/home/index.vue'),
         meta: {
            role: ['common'],
         },
      },
   ],
} as RouteRecordRaw;
