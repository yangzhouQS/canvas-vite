<template>
  <div class="demo01 w-full h-full" id="demo01">
    demo01
  </div>
</template>

<script>
import Konva from 'konva'

export default {
  name: 'demo01',
  data() {
    return {}
  },
  computed: {},
  mounted() {
    this.$nextTick(() => {
      this.drawCanvas();
    })
  },
  methods: {
    drawCanvas() {
      const stage = new Konva.Stage({
        container: 'demo01',
        width: 500,
        height: 500
      })
      const layer = new Konva.Layer()

      const circle = new Konva.Circle({
        x: 100,
        y: 100,
        radius: 70,
        fill: 'red',
        stroke: '#fff',
        strokeWidth: 4
      })
      layer.add(circle)

      stage.add(layer)
      layer.draw()
    }
  }
}
</script>

<style scoped lang="postcss">
.demo01 {
}
</style>
