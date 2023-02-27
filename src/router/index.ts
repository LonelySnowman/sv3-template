import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import home from './moudules/home';
import login from './moudules/login';

const routes: Array<RouteRecordRaw> = [home, login];

//导入生成的路由数据
const router = createRouter({
   history: createWebHashHistory(),
   routes,
});

router.beforeEach(async (_to, _from, next) => {
   NProgress.start();
   next();
});

router.afterEach((_to) => {
   NProgress.done();
});

export default router;
