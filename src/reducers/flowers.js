import * as ActionTypes from '../actions/ActionTypes';
import { updateObjects } from '../utility';

const initialState = {
    text: 'Initial Value'
};

const firstFunction = (state, action) => {
    return updateObjects(state, { text: action.text })
}

const flowers = (state = initialState, action) => {
  switch (action.type) {
    case "IDLE_ACTION": return firstFunction(state, action);
    
    default:
      return state;
  }
}

export default flowers;
