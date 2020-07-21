/* eslint-disable no-shadow */
import Vue from 'vue'

const bus = new Vue()

export default function install(Vue) {
  Vue.directive('click-emit', {
    componentUpdated(el, binding) {
    },

    inserted(el, {value, modifiers}) {
      el.addEventListener('click', e => {
        bus.next(value)
      })

      Object.assign(el, modifiers)
    }
  })

  Vue.directive('keyup-emit', {
    componentUpdated(el, binding) {
    },

    inserted(el, {value, modifiers}) {
      el.addEventListener('keypress', e => {
        if ((e.which || e.keyCode) === 13) {
          bus.next(value)
        }
      })

      Object.assign(el, modifiers)
    }
  })

  Object.defineProperties(Vue.prototype, {
    $EventBus: {
      get() {
        return bus
      }
    }
  })
}
