import { App } from 'vue'
import ballBeat from './src/index.vue'


export {
  ballBeat
}

export default {
  install(app: App) {
    app.component('cc-ball-beat', ballBeat)
  }
}