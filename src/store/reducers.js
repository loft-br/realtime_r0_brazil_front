import actionTypes from './action_types';

const inicialState = {

  data: null,
  lastUpdateTime: null,
};

export default (state = inicialState, action) => {
  switch (action.type) {
    case actionTypes.GET_MODEL_RESULTS :
      return {
        ...state,
        data: action.payload.data,
        lastUpdateTime: action.payload.lastUpdateTime,
      }

    default:
      return state;
  }
}
