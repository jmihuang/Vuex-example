import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const account = {
    state: {
        name: 'susan'
    }
}


export default new Vuex.Store({
    modules: {
        account,
    }
})