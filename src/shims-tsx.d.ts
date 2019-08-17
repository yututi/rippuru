import { PluginObject } from 'vue'
import { RippuruOptions } from './rippuru'

declare global {
    interface Window {
        Rippuru: PluginObject<void>
    }
}
