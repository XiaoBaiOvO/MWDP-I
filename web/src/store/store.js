import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        userInfo: {
            userName: '',
            password: '',
            userId: '',
        }
    },
    mutations: {

    }
});

export default store;