import { get } from 'utils';
import actionTypes from './action_types';

export const getModelResults = () => async (dispatch) => {
  return await get('/get_model_results').then((res) => {
    const { data } = res?.data || {};

    dispatch({
      type: actionTypes.GET_MODEL_RESULTS,
      payload: {
        data,
      },
    });

    return data;
  });
};
