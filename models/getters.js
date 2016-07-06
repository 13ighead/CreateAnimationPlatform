export const getState = state => state;
export function getLayer (state, lid = state.clid) {
    let layers = state.layers;
    for (let index in layers) {
        if (lid == layers[index].lid) {
            return layers[index];
        }
    }
    return {};
};
