# rippuru
ripple plugin for vue.js.

## Install
```cmd
npm i rippuru
```

## Demo
clone this repository and `npm i && npm run serve`.

## How to use
register plugin.
```js
import Vue from 'vue'
import Rippuru from 'rippuru'
Vue.use(Rippuru)
```

use directive.  
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
