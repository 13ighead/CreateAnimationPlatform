/**
 * @file common mutations
 * @author Bighead
 */

import {
    SET_CLID,
    SET
} from '../mutationTypes';

import { getLayer } from '../getters';

export const commonMutations = {

    /**
     * 设置当前layerid
     *
     * @param  {Object} state Vuex
     * @param  {number} lid 指定layerid
     */
    [SET_CLID](state, lid) {
        state.clid = lid;
    },

    /**
     * 给指定layer赋值
     *
     * @param  {Object} state    Vuex
     * @param  {string} type     类别
     * @param  {string} category 分类
     * @param  {string} classify 属性
     * @param  {any} value       指定值
     */
    [SET](state, type, category, classify, value) {
        getLayer(state)[type][category][classify] = value;
    }
};
