import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'

Vue.use(Vuex)
const account = {
    state: {
        name: 'susan'
    }
}


export default new Vuex.Store({
    modules: {
        account,
        cart,
    }
})