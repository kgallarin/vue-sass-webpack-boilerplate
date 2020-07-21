import onClickOutside from './onClickOutside';

export default {
  install(Vue) {
    Vue.directive('click-outside', onClickOutside);
  },

  onClickOutside
}
