import { defineConfig, loadEnv } from 'vite';
import type { UserConfig, ConfigEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { viteMockServe } from 'vite-plugin-mock';
import { fileURLToPath } from 'url';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import ElementPlus from 'unplugin-element-plus/vite';
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
         ElementPlus({}),
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
         },
      },
   };
});
