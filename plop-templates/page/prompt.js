const fs = require('fs');
const path = require('path');

function verifyNames(dirName) {
   const directories = fs.readdirSync(path.join(__dirname, '../../src/views/'));
   return directories.includes(dirName);
}

module.exports = {
   description: '创建页面',
   prompts: [
      {
         type: 'input',
         name: 'name',
         message: '请输入页面名称',
         validate: (dirName) => {
            if (!dirName || dirName.trim === '') {
               return '组件名称不能为空';
            } else if (verifyNames(dirName)) {
               return `页面已经存在`;
            } else {
               return true;
            }
         },
      },
   ],
   actions: (data) => {
      const basePath = path.join(__dirname, `../../src/views/${data.name}`);
      fs.mkdirSync(basePath);
      fs.mkdirSync(
         path.join(__dirname, `../../src/views/${data.name}/components`)
      );
      const actions = [
         {
            type: 'add',
            path: path.join(basePath, 'index.vue'),
            templateFile: 'plop-templates/page/index.hbs',
         },
      ];
      return actions;
   },
};
