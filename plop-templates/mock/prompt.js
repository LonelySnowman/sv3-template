const fs = require('fs');
const path = require('path');
const verifyFileExist = require('../utils');
const baseFile = path.join(__dirname, '../../mock');

module.exports = {
   description: '创建Mock',
   prompts: [
      {
         type: 'input',
         name: 'mockName',
         message: '请输入Mock名称',
         validate: (dirName) => {
            if (!dirName || dirName.trim === '') {
               return 'Mock接口名称不能为空';
            } else if (verifyFileExist(dirName, baseFile, '.ts')) {
               return `Mock接口已经存在`;
            } else {
               return true;
            }
         },
      },
   ],
   actions: (data) => {
      const actions = [
         {
            type: 'add',
            path: path.join(baseFile, `./${data.mockName}.ts`),
            templateFile: path.join(__dirname, './index.hbs'),
         },
      ];
      return actions;
   },
};
