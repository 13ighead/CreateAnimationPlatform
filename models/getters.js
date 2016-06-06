export const getState = state => state;
export function getLayer (state) {
    let layers = state.layers;
    for (let index in layers) {
        if (+state.clid === +layers[index].lid) {
            return layers[index];
        }
    }
    return {};
};
