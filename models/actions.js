export const incrementCounter = createAction('INCREMENT', 1)

function createAction(type) {
    return ({dispatch, ...args}) => dispatch(...args);
}
