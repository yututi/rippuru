import { PluginObject } from 'vue'
import { RippuruOptions } from './rippuru'
import './rippuru.styl'

const Rippuru: PluginObject<RippuruOptions> = {
    install(Vue, options?) {
        // Vue.directive()
    }
}

if (typeof window !== 'undefined') {
	window.Rippuru = Rippuru;
}

export default Rippuru