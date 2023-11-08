import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const modules: Record<string, any> = import.meta.glob(['./modules/*.ts'], {
   eager: true,
});
const routes: Array<RouteRecordRaw> = [];

// 自动导入全部路由
Object.keys(modules).forEach((key) => {
   routes.push(modules[key].default);
});

//导入生成的路由数据
const router = createRouter({
   history: createWebHashHistory(),
   routes,
});

router.beforeEach(async (_to, _from, next) => {
   next();
});

router.afterEach((_to) => {
   NProgress.done();
});

export default router;
