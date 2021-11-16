import { App } from 'vue'
import lineSpinFadeLoader from './src/index.vue'


export {
  lineSpinFadeLoader
}

export default {
  install(app: App) {
    app.component('cc-line-spin-fade-loader', lineSpinFadeLoader)
  }
}