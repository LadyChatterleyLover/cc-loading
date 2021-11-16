import { App } from 'vue'
import ballClipRotate from './src/index.vue'


export {
  ballClipRotate
}

export default {
  install(app: App) {
    app.component('cc-ball-clip-rotate', ballClipRotate)
  }
}