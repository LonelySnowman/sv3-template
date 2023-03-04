module.exports = function (plop) {
   plop.setWelcomeMessage('请选择需要创建的模板');
   plop.setGenerator('page', require('./plop-templates/page/prompt'));
   plop.setGenerator('store', require('./plop-templates/store/prompt'));
   plop.setGenerator('router', require('./plop-templates/router/prompt'));
   plop.setGenerator('mock', require('./plop-templates/mock/prompt'));
};
