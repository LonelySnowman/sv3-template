module.exports = function (plop) {
   plop.setWelcomeMessage('请选择需要创建的模板');
   plop.setGenerator('page', require('./plop-tpls/page/prompt'));
   plop.setGenerator('store', require('./plop-tpls/store/prompt'));
   plop.setGenerator('router', require('./plop-tpls/router/prompt'));
   plop.setGenerator('mock', require('./plop-tpls/mock/prompt'));
};
