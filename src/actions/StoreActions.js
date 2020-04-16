  
import * as types from '../constants/ActionTypes';

const dispatchEvent = (payload) => ({
  type: types.DISPATCH_EVENT,
  payload,
});

const updateCurrentYear = (payload) => ({
  type: types.UPDATE_CUR_YEAR,
  payload,
})

export {
  dispatchEvent,
  updateCurrentYear,
};