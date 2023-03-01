const fs = require('fs');
const path = require('path');
function verifyGlobalNames(comName) {
   const directories = fs.readdirSync(
      path.join(__dirname, '../../src/components/')
   );
   return directories.includes(comName);
}

module.exports = {
   description: '创建组件',
   prompts: [
      {
         type: 'confirm',
         name: 'isGlobal',
         message: '是否为全局组件',
         default: false,
      },
      {
         type: 'input',
         name: 'pageName',
         message: '请输入组件创建路径',
         validate: (comName) => {
            if (!comName || comName.trim === '') {
               return '⭐页面名称不能为空';
            } else if (!verifyGlobalNames(comName)) {
               return `⭐该页面不存在`;
            } else {
               return true;
            }
         },
         when: (data) => {
            return !data.isGlobal;
         },
      },
      {
         type: 'input',
         name: 'name',
         message: '请输入组件名称',
         validate: (v) => {
            if (!v || v.trim === '') {
               return '组件名称不能为空';
            } else {
               return true;
            }
         },
      },
   ],
   actions: (data) => {
      let path = '';
      if (data.isGlobal) {
         path = 'src/components/{{properCase name}}/Header.vue';
      } else {
         path = `${data.path}/components/{{properCase name}}/index.vue`;
      }
      const actions = [
         {
            type: 'add',
            path: path,
            templateFile: 'plop-templates/component/index.hbs',
         },
      ];
      return actions;
   },
};
