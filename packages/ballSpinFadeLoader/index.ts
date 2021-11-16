import { App } from 'vue'
import ballSpinFadeLoader from './src/index.vue'


export {
  ballSpinFadeLoader
}

export default {
  install(app: App) {
    app.component('cc-ball-spin-fade-loader', ballSpinFadeLoader)
  }
}