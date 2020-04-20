import actionTypes from './action_types';

const inicialState = {
  // state_list: null,
  // model_result_state: null,
  // last_date: null,
  data: null,
  lastUpdateTime: '19 de Abril de 2020',
}

export default (state = inicialState, action) => {
  switch (action.type) {
    // case actionTypes.GET_STATE_LIST :
    //   return {
    //     ...state,
    //     state_list: action.payload
    //   }
    //
    // case actionTypes.GET_MODEL_RESULT_STATE :
    //   return {
    //     ...state,
    //     model_result_state: action.payload
    //   }
    //
    // case actionTypes.GET_LAST_DATE :
    //   return {
    //     ...state,
    //     last_date: action.payload
    //   }

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
