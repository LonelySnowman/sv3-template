/*
 * @StyleLint规则配置: https://www.stylelint.com.cn/user-guide/rules/list
 */
module.exports = {
   // 继承推荐规范配置
   extends: [
      'stylelint-config-standard',
      'stylelint-config-prettier',
      'stylelint-config-recommended-scss',
      'stylelint-config-standard-vue',
   ],
   // 添加规则插件
   plugins: ['stylelint-order'],
   // 不同格式的文件指定自定义语法
   overrides: [
      {
         files: ['**/*.(scss|css|vue|html)'],
         customSyntax: 'postcss-scss',
      },
      {
         files: ['**/*.(html|vue)'],
         customSyntax: 'postcss-html',
      },
   ],
   // 忽略文件
   ignoreFiles: [
      '**/*.js',
      '**/*.jsx',
      '**/*.tsx',
      '**/*.ts',
      '**/*.json',
      '**/*.md',
      '**/*.yaml',
   ],
   rules: {
      // 允许空样式文件
      'no-empty-source': null,
      // 允许重复字体族
      'font-family-no-duplicate-names': null,
      // 便于配置变量 关闭未知属性检测
      'property-no-unknown': null,
      // 指定类选择器的模式
      'selector-class-pattern': null,
      // 不允许未知伪类选择器
      'selector-pseudo-class-no-unknown': [
         true,
         {
            ignorePseudoClasses: ['global'],
         },
      ],
      // 不允许未知伪元素选择器
      'selector-pseudo-element-no-unknown': [
         true,
         {
            ignorePseudoElements: ['v-deep'],
         },
      ],
      // 允许对应内核前缀
      'property-no-vendor-prefix': null,
      // 指定样式的排序
      'order/properties-order': [
         'position',
         'top',
         'right',
         'bottom',
         'left',
         'z-index',
         'display',
         'justify-content',
         'align-items',
         'float',
         'clear',
         'overflow',
         'overflow-x',
         'overflow-y',
         'padding',
         'padding-top',
         'padding-right',
         'padding-bottom',
         'padding-left',
         'margin',
         'margin-top',
         'margin-right',
         'margin-bottom',
         'margin-left',
         'width',
         'min-width',
         'max-width',
         'height',
         'min-height',
         'max-height',
         'font-size',
         'font-family',
         'text-align',
         'text-justify',
         'text-indent',
         'text-overflow',
         'text-decoration',
         'white-space',
         'color',
         'background',
         'background-position',
         'background-repeat',
         'background-size',
         'background-color',
         'background-clip',
         'border',
         'border-style',
         'border-width',
         'border-color',
         'border-top-style',
         'border-top-width',
         'border-top-color',
         'border-right-style',
         'border-right-width',
         'border-right-color',
         'border-bottom-style',
         'border-bottom-width',
         'border-bottom-color',
         'border-left-style',
         'border-left-width',
         'border-left-color',
         'border-radius',
         'opacity',
         'filter',
         'list-style',
         'outline',
         'visibility',
         'box-shadow',
         'text-shadow',
         'resize',
         'transition',
      ],
   },
};
