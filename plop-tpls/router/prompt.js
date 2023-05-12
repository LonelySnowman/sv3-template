const fs = require('fs');
const path = require('path');
const verifyFileExist = require('../utils');
const baseFile = path.join(__dirname, '../../src/router/modules');

module.exports = {
   description: '创建Router',
   prompts: [
      {
         type: 'input',
         name: 'routerName',
         message: '请输入路由名称',
         validate: (dirName) => {
            if (!dirName || dirName.trim === '') {
               return '路由名称不能为空';
            } else if (verifyFileExist(dirName, baseFile, '.ts')) {
               return `路由已经存在`;
            } else {
               return true;
            }
         },
      },
   ],
   actions: (data) => {
      const basePath = path.join(baseFile, `./${data.routerName}.ts`);
      const actions = [
         {
            type: 'add',
            path: basePath,
            templateFile: path.join(__dirname, './index.hbs'),
         },
      ];
      return actions;
   },
};
