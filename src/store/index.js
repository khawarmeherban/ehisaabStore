import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import states from "./state";
import getter from "./getters";
import mutation from "./mutations";
import action from "./actions";
// export default new Vuex.Store ({
//     state,
//     getters,
//     mutations,
//     actions,
// })

export const store = new Vuex.Store({
    state: states,
    getters: getter,
    mutations: mutation,
    actions: action
})