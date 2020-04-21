import { get } from '../utils/api.js';
import actionTypes from './action_types';

export const getModelResults = () => async (dispatch) => {
  return await get('/get_model_results').then((res) => {
    const data = res.data.data;
    const rawDate = data[data.length - 1][1];
    const dateObj = new Date(rawDate);
    const monthsName = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ];
    const formattedDate = `${dateObj.getDate() + 1} de ${
      monthsName[dateObj.getMonth()]
    } de ${dateObj.getFullYear()}`;
    dispatch({
      type: actionTypes.GET_MODEL_RESULTS,
      payload: {
        data: res.data,
        lastUpdateTime: formattedDate,
      },
    });
    return res.data;
  });
};
