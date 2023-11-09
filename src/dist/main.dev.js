const _vue = _interopRequireDefault(require('vue'));

const _App = _interopRequireDefault(require('./App.vue'));

const _router = _interopRequireDefault(require('./router'));

const _store = _interopRequireDefault(require('./store'));

require('./plugins/ant-design-vue');

require('@/assets/css/reset.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue.default.config.productionTip = false;
new _vue.default({
  router: _router.default,
  store: _store.default,
  render: function render(h) {
    return h(_App.default);
  },
}).$mount('#app');
