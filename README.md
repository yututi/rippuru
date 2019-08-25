# rippuru
ripple plugin for vue.js.

## Installation
```cmd
npm i rippuru
```

## Demo
clone this repository and run `npm i && npm run dev`.

## How to use
register plugin.
```js
import Vue from 'vue'
import Rippuru from 'rippuru'
Vue.use(Rippuru)
```

then you can use "v-rippuru" directive.  
by default, ripple color depends on color of bound element.
```html
<button v-rippuru>
    hoge
</button>
```

you can change ripple color by specifying directive arg.
```html
<button v-rippuru:red>
    hoge
</button>
```
