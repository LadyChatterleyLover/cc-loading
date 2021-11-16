import { App } from 'vue'
import loaderInstall ,{loader} from './loader'
import ballBeatInstall ,{ballBeat} from './ballBeat'
import ballClipRotateInstall ,{ballClipRotate} from './ballClipRotate'
import ballPulseInstall ,{ballPulse} from './ballPulse'
import ballPulseSyncInstall ,{ballPulseSync} from './ballPulseSync'
import ballScaleInstall ,{ballScale} from './ballScale'
import ballScaleMultipleInstall ,{ballScaleMultiple} from './ballScaleMultiple'
import ballSpinFadeLoaderInstall ,{ballSpinFadeLoader} from './ballSpinFadeLoader'
import lineScaleInstall ,{lineScale} from './lineScale'
import lineScalePartyInstall ,{lineScaleParty} from './lineScaleParty'
import lineScalePulseOutInstall ,{lineScalePulseOut} from './lineScalePulseOut'
import lineSpinFadeLoaderInstall ,{lineSpinFadeLoader} from './lineSpinFadeLoader'
import squareSpinInstall ,{squareSpin} from './squareSpin'


const components = [
  loaderInstall,
  ballBeatInstall,
  ballClipRotateInstall,
  ballPulseInstall,
  ballPulseSyncInstall,
  ballScaleInstall,
  ballScaleMultipleInstall,
  ballSpinFadeLoaderInstall,
  lineScaleInstall,
  lineScalePartyInstall,
  lineScalePulseOutInstall,
  lineSpinFadeLoaderInstall,
  squareSpinInstall
]

export {
  loader,
  ballBeat,
  ballClipRotate,
  ballPulse,
  ballPulseSync,
  ballScale,
  ballScaleMultiple,
  ballSpinFadeLoader,
  lineScale,
  lineScaleParty,
  lineScalePulseOut,
  lineSpinFadeLoader,
  squareSpin
}

export default {
  install(app: App) {
    components.map(item => {
      app.use(item)
    })
  }
}