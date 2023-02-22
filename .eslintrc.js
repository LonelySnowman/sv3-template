module.exports = {
   env: {
      browser: true,
      es2021: true,
      node: true,
      // 'vue/setup-compiler-macros': true,
   },
   extends: [
      'plugin:vue/vue3-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
   ],
   overrides: [],
   parser: 'vue-eslint-parser',
   parserOptions: {
      ecmaVersion: 'latest',
      parser: '@typescript-eslint/parser',
      sourceType: 'module',
   },
   plugins: ['vue', '@typescript-eslint'],
   rules: {
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
   },
};
