import { fileURLToPath } from 'url';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { viteMockServe } from 'vite-plugin-mock';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import ElementPlus from 'unplugin-element-plus/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

export function getPluginsList() {
   return [
      // 编译Vue模板文件
      vue(),
      // 编译jsx文件
      vueJsx(),
      // 开启mock服务器
      viteMockServe({
         mockPath: 'mock',
         localEnabled: true,
         prodEnabled: false, //实际开发请关闭，会影响打包体积
      }),
      // 开启ElementPlus自动引入CSS
      ElementPlus({}),
      // 自动引入组件及ICON
      AutoImport({
         resolvers: [
            IconsResolver({
               prefix: 'Icon',
            }),
            ElementPlusResolver(),
         ],
         dts: fileURLToPath(
            new URL('../types/auto-imports.d.ts', import.meta.url)
         ),
      }),
      // 自动注册组件
      Components({
         resolvers: [
            IconsResolver({
               enabledCollections: ['ep'],
            }),
            ElementPlusResolver(),
         ],
         dts: fileURLToPath(
            new URL('../types/components.d.ts', import.meta.url)
         ),
      }),
      // 自动引入ICON
      Icons({
         autoInstall: true,
      }),
   ];
}
