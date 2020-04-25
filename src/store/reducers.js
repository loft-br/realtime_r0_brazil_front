import { fullFormatDate, getLastTimestamp, dateObjectBuider } from 'utils';
import actionTypes from './action_types';

const inicialState = {
  data: null,
  error: false,
  loading: false,
};

export default (state = inicialState, { payload, type }) => {
  switch (type) {
    case actionTypes.LOAD_MODEL_REQUEST:
      return {
        ...state,
        error: false,
        loading: true,
      };

    case actionTypes.LOAD_MODEL_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      };

    case actionTypes.LOAD_MODEL_SUCCESS: {
      const lastTimestamp = getLastTimestamp(payload.data);
      const date = dateObjectBuider(lastTimestamp);

      return {
        ...state,
        data: {
          ...state.data,
          states: payload?.data,
          lastUpdateTime: fullFormatDate(date),
        },
        loading: false,
        error: false,
      };
    }

    default:
      return state;
  }
};
