<template>
  <div class="app-main w-full h-full overflow-hidden flex">
    <app-aside/>
    <app-container class="flex-1"/>
  </div>
</template>

<script>
import AppAside from './app-aside.vue'
import AppContainer from './app-container.vue'

export default {
  name: 'app-main',
  components: { AppContainer, AppAside },
  data() {
    return {}
  },
  computed: {},
  mounted() {

  },
  methods: {}
}
</script>

<style scoped>
.app-main {
}
</style>
