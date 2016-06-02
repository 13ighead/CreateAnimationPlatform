/**
 * @file actions
 * @author Bighead
 */
import * as MUTATION_TYPES from './mutationTypes';

// element actions

// measure actions
export const setMeasureX = createAction(MUTATION_TYPES.SET_MEASURE_X);
export const setMeasureY = createAction(MUTATION_TYPES.SET_MEASURE_Y);
export const setMeasureWidth = createAction(MUTATION_TYPES.SET_MEASURE_WIDTH);
export const setMeasureHeight = createAction(MUTATION_TYPES.SET_MEASURE_HEIGHT);
export const setMeasureScaleX = createAction(MUTATION_TYPES.SET_MEASURE_SCALE_X);
export const setMeasureScaleY = createAction(MUTATION_TYPES.SET_MEASURE_SCALE_Y);
export const setMeasureRotateX = createAction(MUTATION_TYPES.SET_MEASURE_ROTATE_X);
export const setMeasureRotateY = createAction(MUTATION_TYPES.SET_MEASURE_ROTATE_Y);
export const setMeasureRotateZ = createAction(MUTATION_TYPES.SET_MEASURE_ROTATE_Z);
export const setMeasureOriginX = createAction(MUTATION_TYPES.SET_MEASURE_ORIGIN_X);
export const setMeasureOriginY = createAction(MUTATION_TYPES.SET_MEASURE_ORIGIN_Y);
export const setMeasurePerspective = createAction(MUTATION_TYPES.SET_MEASURE_PERSPECTIVE);
// typesetting actions

function createAction(type) {
    return ({dispatch}, ...args) => dispatch(type, ...args);
}
