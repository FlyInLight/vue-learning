import Vue from 'vue'
import App from './App.vue'
import {mixin1} from "@/mixin";



Vue.config.productionTip = false

Vue.mixin(mixin1)
new Vue({
    render: h => h(App),
}).$mount('#app')