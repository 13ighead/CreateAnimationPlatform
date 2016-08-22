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
            element: elementInitialState[0],
            typesetting: typesettingInitialState[0]
        },
        {
            lid: 1,
            measure: measureInitialState[1],
            element: elementInitialState[1],
            typesetting: typesettingInitialState[1]
        },
        {
            lid: 2,
            measure: measureInitialState[2],
            element: elementInitialState[2],
            typesetting: typesettingInitialState[2]
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
