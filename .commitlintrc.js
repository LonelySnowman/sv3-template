/*
 * @message格式: <type>(<scope>): <subject> /空一行/ <body> /空一行/ <footer>
 * @简写: <type>: <subject>
 * @type: 说明 commit 的类别
 * @scope: 用于说明 commit 影响的范围
 * @subject: commit 目的的简短描述
 * @body: 对 commit 的详细描述
 * @footer: 特殊情况 兼容性变动 版本回退 关闭ISSUE 等描述
 */

module.exports = {
   // message 中包含 init 不进行规则校验
   ignores: [(commit) => commit.includes('init')],
   // 使用 commitlint 默认配置
   extends: ['@commitlint/config-conventional'],
   rules: {
      // body 前空一行
      'body-leading-blank': [2, 'always'],
      // footer 前空一行
      'footer-leading-blank': [2, 'always'],
      // subject 不能为空
      'subject-empty': [2, 'never'],
      // type 不能为空
      'type-empty': [2, 'never'],
      // 自定义类型
      'type-enum': [
         2,
         'always',
         [
            'feat', // 新增功能
            'fix', // 修复 Bug
            'perf', // 性能优化
            'style', // 代码 格式|错别字 更新
            'docs', // 文档修改
            'test', // 增加测试
            'refactor', // 重构
            'build', // 修改项目构建配置
            'ci', // CI|CD 流程变更
            'revert', // 回滚某个更早之前的提交
            'release', // 版本更新
            'chore', // 其他类型
         ],
      ],
   },
};
