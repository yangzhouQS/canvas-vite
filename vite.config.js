import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    },
    // 情景导出 package.json 配置中的exports字段
    conditions: [],
    // 导入时想要省略的扩展名列表
    // 不建议使用 .vue 影响IDE和类型支持
    extensions: ['.vue', '.js', '.jsx', '.tsx', '.json']
  },
  //静态资源服务的文件夹
  publicDir: 'public',
  base: './',
  //静态资源处理
  assetsInclude: '',
  //控制台输出的级别 info 、warn、error、silent
  logLevel: 'info',
  // 设为false 可以避免 vite 清屏而错过在终端中打印某些关键信息
  clearScreen: true
})
