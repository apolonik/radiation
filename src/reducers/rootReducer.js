import * as types from '../constants/ActionTypes';

const initialState = {
  event: null,
  currentYear: 2020,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DISPATCH_EVENT:
      return {
        ...state, event: action.payload,
      };
    case types.UPDATE_CUR_YEAR:
      return {
        ...state, currentYear: action.payload,
      }
    default:
      return state;
  }
};

export default rootReducer;