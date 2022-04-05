import Vue from 'vue'
import Vuex from 'vuex'
import shop from '@/api/shop'
import products from './modules/products'
import cart from './modules/cart'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        cart, products
    },
    state: {
        
    },
    getters: {
    },
    actions: {
    },
    mutations: {
    }
})