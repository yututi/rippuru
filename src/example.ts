import Vue from 'vue'
import Example from './example.vue'
import Rippuru from './index'

Vue.use(Rippuru)

new Vue({
    render: h => h(Example)
}).$mount('#app')
