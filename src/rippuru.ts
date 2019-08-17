import { DirectiveOptions, VNodeDirective } from 'vue'

export interface RippuruOptions {
    isExist?: boolean
    color?: string
    count?: number
    isStatic?: boolean
}
interface RipplableHTMLElement extends HTMLElement {
    _rippuru: RippuruOptions
}

function addListener(el: RipplableHTMLElement, binding: VNodeDirective) {
    el._rippuru = el._rippuru || {}

    if (el._rippuru.isExist) return
    el._rippuru.isExist = true

    el._rippuru.color = binding.arg
    el.addEventListener('mousedown', showRipple)
}

function showRipple(e: MouseEvent) {

    const target = e.target as RipplableHTMLElement
    if (!target._rippuru || !target._rippuru.isExist) return

    const wrapper = document.createElement('span')
    const ripple = document.createElement('span')

    wrapper.classList.add('rippuru-wrapper')
    ripple.classList.add('rippuru-wrapper__ripple')
    const { x, y, radius } = calcPosition(target, e)
    const diameter = radius * 2;
    ripple.style.left = `${x}px`
    ripple.style.top = `${y}px`
    ripple.style.width = `${diameter}px`
    ripple.style.height = `${diameter}px`

    const { color, count } = target._rippuru

    if (color && typeof color === 'string') {
        ripple.style.backgroundColor = color
    }

    if (!count) target._rippuru.count = 1
    else target._rippuru.count++

    const computed = window.getComputedStyle(target)
    if (computed && computed.position === 'static') {
        target.style.position = 'relative'
        target._rippuru.isStatic = true
    }

    wrapper.appendChild(ripple)
    target.appendChild(wrapper)

    setTimeout(() => {
        const remain = target._rippuru.count = target._rippuru.count - 1
        if (!remain && target._rippuru.isStatic) {
            target.style.position = 'static'
        }
        target.removeChild(wrapper)
    }, 500)
}

function calcPosition(el: HTMLElement, e: MouseEvent) {
    const { left, top, width, height } = el.getBoundingClientRect()

    const clickX = e.clientX - left
    const clickY = e.clientY - top

    let radius = 0
    if (width > height) {
        radius = width / 2 > clickX ? width - clickX : clickX
    } else {
        radius = height / 2 > clickY ? height - clickY : clickY
    }

    const x = clickX - radius
    const y = clickY - radius

    return { x, y, radius }
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