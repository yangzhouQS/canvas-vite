import { createApp } from 'vue'
import App from './App.vue'
import './tailwind.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router';

import * as Icons from '@element-plus/icons-vue'


// https://blog.csdn.net/Alloom/article/details/119415984
function transElIconName(iconName) {
  return 'icon' + iconName.replace(/[A-Z]/g, (match) => '-' + match.toLowerCase())
}


const app = createApp(App)
for (const key in Icons) {
  app.component(transElIconName(key), Icons[key])
}

app.config.errorHandler = (err, vm, info) => {
  // 处理错误
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
  console.log(err, info, vm)
}
console.log(app.config)

app.use(router)
app.use(ElementPlus)
app.mount('#app')
