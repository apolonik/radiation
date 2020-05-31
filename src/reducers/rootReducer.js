import {TYPES} from '../constants/constants';

const initialState = {
  data: null,
  requestType: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.DISPATCH_DATA:
      return {
        ...state, data: action.payload,
      };
    case TYPES.DISPATCH_REQUEST_TYPE:
      return {
        ...state, requestType: action.payload,
        };
    default:
      return state;
  }
};

export default rootReducer;