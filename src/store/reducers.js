import {
  fullFormatDate,
  getLastTimestamp,
  dateObjectBuider,
  formatStoreData,
} from 'utils';
import actionTypes from './action_types';

const inicialState = {
  originalData: null,
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
      const data = payload?.data?.data;
      const lastTimestamp = getLastTimestamp(data);
      const date = dateObjectBuider(lastTimestamp);

      return {
        ...state,
        originalData: payload?.data,
        data: {
          ...state.data,
          states: formatStoreData(data),
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
