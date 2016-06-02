/**
 * @file measure mutations
 * @author Bighead
 */

import {
    SET_MEASURE_X,
    SET_MEASURE_Y,
    SET_MEASURE_WIDTH,
    SET_MEASURE_HEIGHT,
    SET_MEASURE_SCALE_X,
    SET_MEASURE_SCALE_Y,
    SET_MEASURE_ROTATE_X,
    SET_MEASURE_ROTATE_Y,
    SET_MEASURE_ROTATE_Z,
    SET_MEASURE_ORIGIN_X,
    SET_MEASURE_ORIGIN_Y,
    SET_MEASURE_PERSPECTIVE
} from '../mutationTypes';

export const measureInitialState = {
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    scale: {
        x: 1,
        y: 1
    },
    rotate: {
        x: 0,
        y: 0,
        z: 0
    },
    origin: {
        x: 0,
        y: 0
    },
    perspective: 0
};

export const measureMutations = {
    [SET_MEASURE_X] (state, value) {
        state.measure.x = value;
    },
    [SET_MEASURE_Y] (state, value) {
        state.measure.y = value;
    },
    [SET_MEASURE_WIDTH] (state, value) {
        state.measure.width = value;
    },
    [SET_MEASURE_HEIGHT] (state, value) {
        state.measure.height = value;
    },
    [SET_MEASURE_SCALE_X] (state, value) {
        state.measure.scale.x = value;
    },
    [SET_MEASURE_SCALE_Y] (state, value) {
        state.measure.scale.y = value;
    },
    [SET_MEASURE_ROTATE_X] (state, value) {
        state.measure.rotate.x = value;
    },
    [SET_MEASURE_ROTATE_Y] (state, value) {
        state.measure.rotate.y = value;
    },
    [SET_MEASURE_ROTATE_Z] (state, value) {
        state.measure.rotate.z = value;
    },
    [SET_MEASURE_ORIGIN_X] (state, value) {
        state.measure.origin.x = value;
    },
    [SET_MEASURE_ORIGIN_Y] (state, value) {
        state.measure.origin.y = value;
    },
    [SET_MEASURE_PERSPECTIVE] (state, value) {
        state.measure.perspective = value;
    }
};
