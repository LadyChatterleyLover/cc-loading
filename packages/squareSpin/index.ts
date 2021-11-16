import { App } from 'vue'
import squareSpin from './src/index.vue'


export {
  squareSpin
}

export default {
  install(app: App) {
    app.component('cc-square-spin', squareSpin)
  }
}