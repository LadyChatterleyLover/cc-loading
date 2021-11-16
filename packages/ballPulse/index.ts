import { App } from 'vue'
import ballPulse from './src/index.vue'


export {
  ballPulse
}

export default {
  install(app: App) {
    app.component('cc-ball-pulse', ballPulse)
  }
}