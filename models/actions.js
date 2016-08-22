/**
 * @file actions
 * @author Bighead
 */
import * as MUTATION_TYPES from './mutationTypes';

export const setClid = createAction(MUTATION_TYPES.SET_CLID);
export const set = createAction(MUTATION_TYPES.SET);

function createAction(type) {
    return ({dispatch}, ...args) => dispatch(type, ...args);
}
