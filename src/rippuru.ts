import { DirectiveOptions } from 'vue'

export interface RippuruOptions {

}

class RippleObj {

    private el: HTMLElement

    constructor() {
        const wrapper = document.createElement('div')
        const ripple = document.createElement('div')
        wrapper.classList.add('rippuru-wrapper')
        ripple.classList.add('rippuru-wrapper__ripple')
        wrapper.appendChild(ripple)

        this.el = wrapper
    }

    appendTo(el: HTMLElement) {
        el.appendChild(this.el)
    }

    remove() {
        this.el.parentNode && this.el.parentNode.removeChild(this.el)
    }
}

class RippuruManager {
    ripples: RippleObj[] = []

    appendNewRipple(parent: HTMLElement) {
        const ripple = new RippleObj()
        ripple.appendTo(parent)
        this.ripples.push(ripple)
    }
}

const Rippuru: DirectiveOptions = {
    bind(el, binding, vnode, oldVnode) {
        el.addEventListener('click', () => {

        })
    }

}

export default Rippuru