import { defineConfig, loadEnv } from 'vite';
import type { UserConfig, ConfigEnv } from 'vite';
import { fileURLToPath } from 'url';
import { getPluginsList } from './build/plugins';
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
   const root = process.cwd();
   const env = loadEnv(mode, root);
   return {
      root,
      base: '/',
      publicDir: fileURLToPath(new URL('./public', import.meta.url)), // 打包路径
      assetsInclude: fileURLToPath(new URL('./src/assets', import.meta.url)), // 需要处理的静态资源位置
      plugins: getPluginsList(mode),
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
      // 打包配置
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
      // 配置别名
      resolve: {
         alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '#': fileURLToPath(new URL('./types', import.meta.url)),
         },
      },
   };
});
