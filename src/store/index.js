import Vue from 'vue'
import Vuex from 'vuex'
import festival from './modules/festival'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        festival
    }
})