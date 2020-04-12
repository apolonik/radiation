  
import * as types from '../constants/ActionTypes';

const dispatchEvent = (payload) => ({
  type: types.DISPATCH_EVENT,
  payload,
});

export {
  dispatchEvent,
};