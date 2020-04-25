import { get } from 'utils';
import actionTypes from './action_types';

export const getModelResults = () => async (dispatch) => {
  dispatch({ type: actionTypes.LOAD_MODEL_REQUEST });

  return await get('/get_model_results')
    .then((res) => {
      const { data } = res?.data || {};

      dispatch({
        type: actionTypes.LOAD_MODEL_SUCCESS,
        payload: {
          data,
        },
      });

      return data;
    })
    .catch(() => {
      dispatch({ type: actionTypes.LOAD_MODEL_FAILURE });
    });
};
