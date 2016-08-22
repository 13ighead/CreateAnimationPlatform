/**
 * @file getters
 * @author Bighead
 */

/**
 * 根据当前layerid返回layer
 *
 * @param  {Object} state Vuex
 * @param  {number} lid   layerid
 * @return {Object}       layer
 */
export function getLayer(state, lid = state.clid) {
    let layers = state.layers;
    for (let index in layers) {
        if (+lid === +layers[index].lid) {
            return layers[index];
        }
    }
    return {};
}

/**
 * 获得指定layer指定值
 *
 * @param  {Object} state vuex
 * @return {Function}     返回值方法
 */
export function get(state) {

    /**
     * 返回指定值
     *
     * @param  {string} type     类别
     * @param  {string} category 分类
     * @param  {string} classify 属性
     * @param  {number} lid      指定layerid
     * @return {any}             指定值
     */
    return function (type, category, classify, lid = state.clid) {
        const layers = state.layers;
        let layer = {};
        for (let index in layers) {
            if (+lid === +layers[index].lid) {
                layer = layers[index];
            }
        }
        return layer[type][category][classify];
    };
}
