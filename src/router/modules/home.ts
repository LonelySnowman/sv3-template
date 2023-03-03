import { RouteRecordRaw } from 'vue-router';

export default {
   path: '/',
   redirect: '/login',
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
            role: ['common', 'admin'],
         },
      },
   ],
} as RouteRecordRaw;
