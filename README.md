<div align="center">
    <h1>sv3-template</h1>
</div>
<div align="center">
    <img src="https://sv3-docs.snowhouse.space/logo.png" alt="SV3-Family" width="150px"/>
</div>

<div align="center">
    <img src="https://skillicons.dev/icons?i=vue,vite,ts,scss" alt="skill"/>
</div>
<br>
<div align="center">
 <img
    src="https://img.shields.io/badge/-Pinia-1572B6?logo=vuedotjs&style=flat-square&logoColor=white"
 />
 <img
    src="https://img.shields.io/badge/-ElementPlus-1572B6?logo=vuedotjs&style=flat-square&logoColor=white"
 />
</div>

<div align="center">
 <img
    src="https://img.shields.io/badge/-ESLint-E34F26?logo=eslint&style=flat-square&logoColor=white"
 />
 <img
    src="https://img.shields.io/badge/-Prettier-1572B6?logo=prettier&style=flat-square&logoColor=white"
 />
 <img
    src="https://img.shields.io/badge/-StyleLint-oringe?logo=stylelint&style=flat-square&logoColor=white"
 />
</div>

## 📕详情文档

- 官方文档：[查看文档](https://sv3-docs.snowhouse.space/)

## 📖项目介绍

- 快速开发Vue3项目的基础模板，配置常用路由及状态管理等工具，搭配简易Lint规范，加速基础项目开发。
- 包含两个版本：main分支包含项目全部内容，thin分支剔除了登录示例及顶部路由菜单示例。

## 🚀快速开始

- 推荐使用 pnpm 进行依赖管理
- `node` 版本 ≥ 18

```bash
# 克隆仓库
git clone git@github.com:LonelySnowman/sv3-template.git

# 克隆 thin 版本
git clone -b thin git@github.com:LonelySnowman/sv3-template.git

# 进入项目根目录
cd sv3-template

# 安装依赖
pnpm install

# 启动项目
pnpm run dev
```

- 项目提供命令行工具进行下载 | [arceus-cli](https://github.com/LonelySnowman/arceus-cli)

```bash
# 安装依赖
npm install arceus-cli -g

# 创建模板
arceus create
```

## ⚓指令介绍

-  dev：本地运行项目
-  build：打包项目
-  preview：预览打包项目
-  gen：生成预设模板
-  lint:eslint：进行 eslint 校验
-  lint:prettier：进行 prettier 代码风格校验
-  lint:stylelint：对样式文件进行校验
-  lint:lint-stage：对 git 缓存区的内容进行代码风格与质量校验
-  prepare：初始化 husky

## 📻技术栈

-  使用 Vite 进行项目构建
-  使用 TypeScript
-  使用 Sass 编写样式
-  对 pinia，vue-router，axios 进行模块化封装
-  使用 CommitLint，ESLint，StyleLint，Prettier，LintStage 进行团队项目规范
-  使用 Mock.js 模拟数据
-  使用 Plop 快速生成开发模板
-  使用 ElementPlus 组件库
-  支持 Iconify 图标库自动引入
