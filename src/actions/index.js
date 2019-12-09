import * as ActionTypes from './ActionTypes';

export const updateText = (text) => {
    return {
        type: ActionTypes.IDLE_ACTION,
        text
    }
}