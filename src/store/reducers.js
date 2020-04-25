import { fullFormatDate, getLastTimestamp } from 'utils';
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

    case actionTypes.LOAD_MODEL_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          states: payload?.data,
          lastUpdateTime: fullFormatDate(
            new Date(getLastTimestamp(payload.data))
          ),
        },
        loading: false,
        error: false,
      };

    default:
      return state;
  }
};
