import { App } from 'vue'
import lineScalePulseOut from './src/index.vue'


export {
  lineScalePulseOut
}

export default {
  install(app: App) {
    app.component('cc-line-scale-pulse-out', lineScalePulseOut)
  }
}