import {TYPES} from '../constants/constants';

const dispatchData = (payload) => ({
  type: TYPES.DISPATCH_DATA,
  payload,
});

const dispatchRequest = (payload) => ({
  type: TYPES.DISPATCH_REQUEST_TYPE,
  payload,
});

export {dispatchData, dispatchRequest};