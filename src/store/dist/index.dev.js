Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _vue = _interopRequireDefault(require('vue'));

const _vuex = _interopRequireDefault(require('vuex'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue.default.use(_vuex.default);

const _default = new _vuex.default.Store({
  state: {
    // 用于切换菜单的闭合状态  false 代表不闭合  true代表闭合
    collapsed: false,
  },
  mutations: {
    changeCollapsed: function changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
  },
  actions: {
    changeCollapsed: function changeCollapsed(_ref) {
      const { commit } = _ref;
      commit('changeCollapsed');
    },
  },
  modules: {},
});

exports.default = _default;
