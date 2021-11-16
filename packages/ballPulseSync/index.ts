import { App } from 'vue'
import ballPulseSync from './src/index.vue'


export {
  ballPulseSync
}

export default {
  install(app: App) {
    app.component('cc-ball-pulse-sync', ballPulseSync)
  }
}