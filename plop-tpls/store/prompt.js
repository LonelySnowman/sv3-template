const fs = require('fs');
const path = require('path');
const verifyFileExist = require('../utils');
const baseFile = path.join(__dirname, '../../src/store/modules');

module.exports = {
   description: '创建Store',
   prompts: [
      {
         type: 'input',
         name: 'storeName',
         message: '请输入store的名称',
         validate: (storeName) => {
            if (!storeName || storeName.trim === '') {
               return 'Store名称不能为空';
            } else if (verifyFileExist(storeName, baseFile)) {
               return `该Store已存在`;
            } else {
               return true;
            }
         },
      },
   ],
   actions: (data) => {
      let basePath = path.join(baseFile, `./${data.storeName}`);
      fs.mkdirSync(basePath);
      const actions = [
         {
            type: 'add',
            path: path.join(basePath, 'index.ts'),
            templateFile: path.join(__dirname, './index.hbs'),
         },
         {
            type: 'add',
            path: path.join(basePath, 'types.ts'),
            templateFile: path.join(__dirname, './types.hbs'),
         },
      ];
      return actions;
   },
};
