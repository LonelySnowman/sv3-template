<div align="center"><h1>sv3-template</h1></div>
<div align="center"><img src="https://sv3-docs.snowhouse.space/logo.png" alt="SV3-Family" class="logoImg"/></div>
<div class="imgBox">
 <img
    src="https://img.shields.io/badge/-Vite-E34F26?logo=vite&style=flat-square&logoColor=white"
 />
 <img
    src="https://img.shields.io/badge/-vue3-1572B6?logo=vuedotjs&style=flat-square&logoColor=white"
 />
 <img
    src="https://img.shields.io/badge/-Typescript-oringe?logo=typescript&style=flat-square&logoColor=white"
 />
 <img
    src="https://img.shields.io/badge/-Sass-E34F26?logo=sass&style=flat-square&logoColor=white"
 />
 <img
    src="https://img.shields.io/badge/-Pinia-1572B6?logo=vuedotjs&style=flat-square&logoColor=white"
 />
 <img
    src="https://img.shields.io/badge/-Pnpm-oringe?logo=pnpm&style=flat-square&logoColor=white"
 />
 <img
    src="https://img.shields.io/badge/-ESLint-E34F26?logo=eslint&style=flat-square&logoColor=white"
 />
 <img
    src="https://img.shields.io/badge/-Prettier-1572B6?logo=prettier&style=flat-square&logoColor=white"
 />
 <img
    src="https://img.shields.io/badge/-StyleLint-oringe?logo=stylelint&style=flat-square&logoColor=white"
 />
 <img
    src="https://img.shields.io/badge/-Axios-E34F26?logo=vuedotjs&style=flat-square&logoColor=white"
 />
 <img
    src="https://img.shields.io/badge/-ElementPlus-1572B6?logo=vuedotjs&style=flat-square&logoColor=white"
 />
 <img
    src="https://img.shields.io/badge/-Mock.js-oringe?logo=vuedotjs&style=flat-square&logoColor=white"
 />
</div>

### Vue3 快速开发脚手架

官方文档：[SV3-Family | Vue3](https://sv3-docs.snowhouse.space/)

-  使用 Vite 进行项目构建
-  使用 TypeScript
-  使用 Sass 编写样式
-  对 pinia，vue-router，axios 进行模块化封装
-  使用 CommitLint，ESLint，StyleLint，Prettier，LintStage 进行团队项目规范
-  使用 Mock.js 模拟数据，使用 plop 快速生成开发模板
-  使用 ElementPlus 组件库

### 快速使用

-  推荐使用 pnpm 进行依赖管理

```bash
git clone git@github.com:LonelySnowman/sv3-template.git

cd sv3-template

pnpm install
```

### 指令介绍

-  dev：本地运行项目
-  build：打包项目
-  gen：生成预设模板
-  lint:eslint：进行 eslint 校验
-  lint:prettier：进行 prettier 代码风格校验
-  lint:stylelint：对样式文件进行校验
-  lint:lint-stage：对 git 缓存区的内容进行代码风格与质量校验
-  prepare：初始化 husky
