# rippuru
ripple effect plugin for vue.js.

## Rerquirements
- Vue : 2.X

## Demo
clone this repository and run `npm i && npm run dev`.

## Installation
```cmd
npm i rippuru
```

## How to use
register this plugin.
```js
import Vue from 'vue'
import Rippuru from 'rippuru'
Vue.use(Rippuru)
```

then you can use "v-rippuru" directive.  
by default, ripple color depends on color of binded element.
```html
<!-- this will be blue ripple -->
<button style="color:blue;" v-rippuru>
    hoge
</button>
```

you can change ripple color by specifying directive arg.
```html
<!-- this will be red ripple -->
<button style="color:blue;" v-rippuru:red>
    hoge
</button>
```
