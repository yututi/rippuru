import { PluginObject } from 'vue'
import RippuruDirective , { RippuruOptions } from './rippuru'
import './rippuru.styl'

const Rippuru: PluginObject<RippuruOptions> = {
    install(Vue, options?) {
        Vue.directive('rippuru', RippuruDirective)
    }
}

if (typeof window !== 'undefined') {
	window.Rippuru = Rippuru;
}

export default Rippuru