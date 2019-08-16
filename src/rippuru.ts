import { DirectiveOptions, VNodeDirective } from 'vue'

export interface RippuruOptions {
    isExist?: boolean
    color?: string
}

function addListener(el: RipplableHTMLElement, binding: VNodeDirective) {
    el._rippuru = el._rippuru || {}

    if (el._rippuru.isExist) return
    el._rippuru.isExist = true

    el._rippuru.color = binding.expression
    el.addEventListener('mousedown', showRipple)
}

function showRipple(e: MouseEvent) {

    const target = e.target as RipplableHTMLElement
    const wrapper = document.createElement('span')
    const ripple = document.createElement('span')

    wrapper.classList.add('rippuru-wrapper')
    ripple.classList.add('rippuru-wrapper__ripple')
    const { x, y, size } = calcPosition(target, e)

    ripple.style.left = `${x}px`
    ripple.style.top = `${y}px`
    ripple.style.width = `${size}px`
    ripple.style.height = `${size}px`

    const { color } = target._rippuru || { color: null }

    if (color && typeof color === 'string') {
        ripple.style.backgroundColor = color
    }


    const computed = window.getComputedStyle(target)
    let previousPosition = computed.position
    if (computed && computed.position === 'static') {
        target.style.position = 'relative'
        previousPosition = 'static'
    }

    wrapper.appendChild(ripple)
    target.appendChild(wrapper)

    setTimeout(() => {
        target.style.position = previousPosition
        target.removeChild(wrapper)
    }, 500)
}

function calcPosition(el: HTMLElement, e: MouseEvent) {
    const { left, top, width, height } = el.getBoundingClientRect()
    const size = width > height ? width : height
    const x = e.clientX - left - size / 2
    const y = e.clientY - top - size / 2


    return { x, y, size }
}

interface RipplableHTMLElement extends HTMLElement {
    _rippuru: RippuruOptions
}

function removeListener(el: RipplableHTMLElement) {
    delete el._rippuru
    el.removeEventListener('mousedown', showRipple)
}

const RippuruDirective: DirectiveOptions = {
    bind: addListener,
    unbind: removeListener
}

export default RippuruDirective