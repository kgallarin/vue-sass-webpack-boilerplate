
function validate(binding) {
if (typeof binding.value !== 'function') {
  console.warn('[v-click-outside:] provided expression', binding.expression, 'is not a function.')
  return false
}

return true
}

function isPopup(popupItem, elements) {
if (!popupItem || !elements) {
  return false
}

for (let i = 0, len = elements.length; i < len; i++) {
  try {
    if (popupItem.contains(elements[i])) {
      return true
    } else if (elements[i].contains(popupItem)) {
      return false
    }
  } catch(e) {
    return false
  }
}

return false
}

function isServer(vNode) {
return typeof vNode.componentInstance !== 'undefined' && vNode.componentInstance.$isServer
}

export default {
bind: function (el, binding, vNode) {
  if (!validate(binding)) {
    return
  }

  // Define Handler and cache it on the element
  function handler(e) {
    if (!vNode.context || e.button === 1) {
      return
    }

    // some components may have related popup item, on which we shall prevent the click outside event handler.
    const elements = e.path || (e.composedPath && e.composedPath())

    if(elements && elements.length > 0) {
      elements.unshift(e.target)
    }

    if (el.contains(e.target) || isPopup(vNode.context.popupItem, elements)) {
      return
    }

    el.__vueClickOutside__.callback(e)
  }

  // add Event Listeners
  el.__vueClickOutside__ = {
    handler: handler,
    callback: binding.value
  }

  if (!isServer(vNode)) {
    document.addEventListener('mousedown', handler)
  }
},

update: function (el, binding) {
  if (validate(binding)) {
    el.__vueClickOutside__.callback = binding.value
  }
},

unbind: function (el, binding, vNode) {
  // Remove Event Listeners
  if (!isServer(vNode)) {
    document.removeEventListener('mousedown', el.__vueClickOutside__.handler)
  }

  delete el.__vueClickOutside__
}
}
