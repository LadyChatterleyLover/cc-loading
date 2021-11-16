import { App } from 'vue'
import lineScaleParty from './src/index.vue'


export {
  lineScaleParty
}

export default {
  install(app: App) {
    app.component('cc-line-scale-party', lineScaleParty)
  }
}