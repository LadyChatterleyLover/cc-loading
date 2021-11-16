import { App } from 'vue'
import lineScale from './src/index.vue'


export {
  lineScale
}

export default {
  install(app: App) {
    app.component('cc-line-scale', lineScale)
  }
}