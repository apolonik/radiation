import * as types from '../constants/ActionTypes';

const initialState = {
  event: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DISPATCH_EVENT:
      return {
        ...state, event: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;