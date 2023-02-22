import { defineConfig, loadEnv } from 'vite';
import type { UserConfig, ConfigEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx'; //tsx插件引入
// import AutoImport from 'unplugin-auto-import/vite' //自动引入ref,reactive等等等
// // 配置antd-v按需加载
// import Components from 'unplugin-vue-components/vite'
// import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path';
import { fileURLToPath } from 'url';
// import { wrapperEnv } from './build/utils'

// defineConfig 工具函数，这样不用 jsdoc 注解也可以获取类型提示
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  console.log(command, mode, '===');
  const root = process.cwd();
  const env = loadEnv(mode, root); // 环境变量对象

  console.log('环境变量------', env);
  console.log('文件路径（ process.cwd()）------', root);
  console.log('文件路径（dirname）------', __dirname + '/src');
  return {
    root, // 项目根目录位置 process.cwd()
    base: '/', //  开发生产环境基础路径
    publicDir: resolve(__dirname, './public'), // 打包路径
    assetsInclude: resolve(__dirname, './src/assets'), // 需要处理的静态资源位置

    // vite插件配置
    plugins: [vue(), vueJsx()],

    // 开发预览服务配置
    server: {
      https: false, // 启用 TLS + HTTP/2 server.proxy 选项被使用时将会仅使用 TLS
      host: true, // 监听所有地址
      port: 3000, // 开发服务端口
      open: true, //启动时自动在浏览器中打开
      cors: false, //为开发服务器配置 CORS
      proxy: {
        '/api': {
          target: 'http://192.168.1.97:108', // 代理目标位置
          changeOrigin: true, // 是否允许跨域
          rewrite: (path) => path.replace(/^\/api/, ''), // 将 'api' 替换为 ''
        },
      },
    },
    // 项目构建配置
    build: {
      target: 'modules', // 最终构建的兼容目标 (modules 为 es2020)
      outDir: 'dist', // 构建包输出目录
      assetsDir: 'assets', // 静态资源得存放路径文件名  assets
      sourcemap: false, //构建后是否生成 source map 文件
      minify: 'esbuild', // 项目压缩 :boolean | 'terser' | 'esbuild'
      chunkSizeWarningLimit: 1000, //chunk 大小警告的限制（以 kbs 为单位）默认：500
      cssTarget: 'chrome61', //防止 vite 将 rgba() 颜色转化为 #RGBA 十六进制符号的形式  (要兼容的场景是安卓微信中的 webview 时,它不支持 CSS 中的 #RGBA 十六进制颜色符号)
    },
    // resolver配置
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '#': fileURLToPath(new URL('./type', import.meta.url)),
      },
    },
    // ******打印+debugger清除配置******
    // 测试环境保留打印
    // esbuild: {
    //     pure: VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : []
    // },

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
