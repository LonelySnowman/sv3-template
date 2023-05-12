const fs = require('fs');
const path = require('path');
const verifyFileExist = require('../utils');
const baseFile = path.join(__dirname, '../../src/views');

module.exports = {
   description: '创建页面',
   prompts: [
      {
         type: 'input',
         name: 'pageName',
         message: '请输入页面名称',
         validate: (dirName) => {
            if (!dirName || dirName.trim === '') {
               return '组件名称不能为空';
            } else if (verifyFileExist(dirName, baseFile)) {
               return `页面已经存在`;
            } else {
               return true;
            }
         },
      },
   ],
   actions: (data) => {
      const basePath = path.join(baseFile, `./${data.pageName}`);
      fs.mkdirSync(basePath);
      fs.mkdirSync(path.join(baseFile, `./${data.pageName}/components`));
      const actions = [
         {
            type: 'add',
            path: path.join(basePath, 'index.vue'),
            templateFile: path.join(__dirname, './index.hbs'),
         },
      ];
      return actions;
   },
};
