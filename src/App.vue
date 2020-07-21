<template>
  <div id="app">
    <component :is="layout" v-if="layout">
      <router-view :key="$route.fullPath" />
    </component>
  </div>
</template>

<script>
import Modal from '@components/common/Modal'
import { mapGetters } from "vuex";


const requireContext = require.context(
  '@components/layouts',
  false,
  /.*\.vue$/
)

const layouts = requireContext
  .keys()
  .map(file => [file.replace(/(^.\/)|(\.vue$)/g, ''), requireContext(file)])
  .reduce((components, [name, component]) => {
    components[name] = component.default || component
    return components
  }, {})

export default {
  name: 'app',
  components: { Modal },
  computed: {
    layout() {
      return layouts[this.$route.meta.layout || 'default']
    }
  },
  methods: {
    setInnerWidthEvent() {
      this.$store.commit('app/SET_WINDOW_WIDTH', window.innerWidth)
    },
    setInnerHeightEvent() {
      this.$store.commit('app/SET_WINDOW_HEIGHT', window.innerHeight)
    }
  },
  created() {
    window.addEventListener('resize', this.setInnerWidthEvent)
    window.addEventListener('resize', this.setInnerHeightEvent)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setInnerWidthEvent)
    window.removeEventListener('resize', this.setInnerHeightEvent)
  }

};
</script>
