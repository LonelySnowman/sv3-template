import { defineConfig, loadEnv } from 'vite';
import type { UserConfig, ConfigEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { viteMockServe } from 'vite-plugin-mock';
import { fileURLToPath } from 'url';
import Icons from 'unplugin-icons/dist/vite.js';
import IconsResolver from 'unplugin-icons/dist/resolver.js';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
   const root = process.cwd();
   const env = loadEnv(mode, root);
   return {
      root,
      base: '/',
      publicDir: fileURLToPath(new URL('./public', import.meta.url)), // 打包路径
      assetsInclude: fileURLToPath(new URL('./src/assets', import.meta.url)), // 需要处理的静态资源位置
      plugins: [
         vue(),
         vueJsx(),
         viteMockServe({
            mockPath: 'mock',
            localEnabled: true,
            prodEnabled: false, //实际开发请关闭，会影响打包体积
         }),
         AutoImport({
            resolvers: [
               IconsResolver({
                  prefix: 'Icon',
               }),
               ElementPlusResolver(),
            ],
            dts: fileURLToPath(
               new URL('./types/auto-imports.d.ts', import.meta.url)
            ),
         }),
         Components({
            resolvers: [
               IconsResolver({
                  enabledCollections: ['ep'],
               }),
               ElementPlusResolver(),
            ],
            dts: fileURLToPath(
               new URL('./types/components.d.ts', import.meta.url)
            ),
         }),
         Icons({
            autoInstall: true,
         }),
      ],
      server: {
         https: false,
         host: true,
         port: 3000,
         open: false,
         cors: true,
         proxy: {
            [env.VITE_APP_API_BASEURL]: {
               target: 'http://localhost:3000',
               changeOrigin: true,
            },
            [env.VITE_APP_MOCK_BASEURL]: {
               target: 'http://localhost:3000',
               changeOrigin: true,
            },
         },
      },
      build: {
         sourcemap: false,
         chunkSizeWarningLimit: 4000,
         rollupOptions: {
            input: {
               index: fileURLToPath(new URL('./index.html', import.meta.url)),
            },
            // 静态资源分类打包
            output: {
               format: 'esm',
               chunkFileNames: 'static/js/[name]-[hash].js',
               entryFileNames: 'static/js/[name]-[hash].js',
               assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
            },
         },
      },
      resolve: {
         alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '#': fileURLToPath(new URL('./type', import.meta.url)),
         },
      },
      css: {
         // 全局变量+全局引入less+配置antdv主题色
         preprocessorOptions: {
            less: {
               javascriptEnabled: true,
               // 全局变量使用：@primary-color
               modifyVars: {
                  'primary-color': '#1890ff', // 全局主色
                  'link-color': ' #1890ff', // 链接色
                  'success-color': ' #52c41a', // 成功色
                  'warning-color': ' #faad14', // 警告色
                  'error-color': ' #f5222d', // 错误色
                  'font-size-base': ' 14px', // 主字号
                  'heading-color': ' rgba(0, 0, 0, 0.85)', // 标题色
                  'text-color': ' rgba(0, 0, 0, 0.65)', // 主文本色
                  'text-color-secondary': ' rgba(0, 0, 0, 0.45)', // 次文本色
                  'disabled-color': ' rgba(0, 0, 0, 0.25)', // 失效色
                  'border-radius-base': ' 2px', // 组件/浮层圆角
                  'border-color-base': ' #d9d9d9', // 边框色
                  'box-shadow-base': ' 0 2px 8px rgba(0, 0, 0, 0.15)', // 浮层阴影
               },
            },
         },
      },
   };
});
