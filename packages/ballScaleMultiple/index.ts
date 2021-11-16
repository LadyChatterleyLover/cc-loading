import { App } from 'vue'
import ballScaleMultiple from './src/index.vue'


export {
  ballScaleMultiple
}

export default {
  install(app: App) {
    app.component('cc-ball-scale-multiple', ballScaleMultiple)
  }
}