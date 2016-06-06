import Vue from 'vue';
import Vuex from 'vuex';

import { commonMutations } from './modules/common';
import { measureInitialState, measureMutations } from './modules/measure';
import { elementInitialState, elementMutations } from './modules/element';
import { typesettingInitialState, typesettingMutations } from './modules/typesetting';

Vue.use(Vuex);

const state = {
    layers: [
        {
            lid: 0,
            measure: measureInitialState[0],
            element: elementInitialState,
            typesetting: typesettingInitialState
        },
        {
            lid: 1,
            measure: measureInitialState[1],
            element: elementInitialState,
            typesetting: typesettingInitialState
        },
        {
            lid: 2,
            measure: measureInitialState[2],
            element: elementInitialState,
            typesetting: typesettingInitialState
        }
    ],
    clid: 0
};

const mutations = Object.assign({},
    commonMutations,
    measureMutations,
    elementMutations,
    typesettingMutations
);

export default new Vuex.Store({
    state,
    mutations,
    strict: process.env.NODE_ENV !== 'production'
});
