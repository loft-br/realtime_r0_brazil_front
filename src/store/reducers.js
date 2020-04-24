import actionTypes from './action_types';
import { fullFormatDate, getLastTimestamp } from '../utils';

const inicialState = {
  data: null,
  lastUpdateTime: null,
};

export default (state = inicialState, { payload, type }) => {
  switch (type) {
    case actionTypes.GET_MODEL_RESULTS:
      return {
        ...state,
        data: payload.data,
        lastUpdateTime: fullFormatDate(getLastTimestamp(payload?.data)),
      };

    default:
      return state;
  }
};
