import { App } from 'vue'
import ballScale from './src/index.vue'


export {
  ballScale
}

export default {
  install(app: App) {
    app.component('cc-ball-scale', ballScale)
  }
}