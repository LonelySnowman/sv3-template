module.exports = function (plop) {
   console.log('奇怪');
   plop.setWelcomeMessage('请选择需要创建的模板');
   plop.setGenerator('page', require('./plop-templates/page/prompt'));
   plop.setGenerator('component', require('./plop-templates/component/prompt'));
};
