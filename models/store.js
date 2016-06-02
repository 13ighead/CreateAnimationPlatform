import Vue from 'vue';
import Vuex from 'vuex';

import {measureInitialState, measureMutations} from './modules/measure';
import {elementInitialState, elementMutations} from './modules/element';
import {typesettingInitialState, typesettingMutations} from './modules/typesetting';

Vue.use(Vuex);

const state = {
    measure: measureInitialState,
    element: elementInitialState,
    typesetting: typesettingInitialState
};

const mutations = Object.assign({},
    measureMutations,
    elementMutations,
    typesettingMutations
);

export default new Vuex.Store({
    state,
    mutations,
    strict: process.env.NODE_ENV !== 'production'
});
