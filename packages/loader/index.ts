import { App } from 'vue'
import loader from './src/index.vue'


export {
  loader
}

export default {
  install(app: App) {
    app.component('cc-loader', loader)
  }
}