/**
 * @file measure mutations
 * @author Bighead
 */

import {
    SET_CLID
} from '../mutationTypes';

export const commonMutations = {
    [SET_CLID] (state, value) {
        state.clid = value;
    }
};
