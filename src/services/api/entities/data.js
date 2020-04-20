import api from '../apiConfig';

// TODO: remove in the future
import mock from '../../../mock/charts.json';

export class DataEntity {
  async getUpdateData() {
    try {
      const response = await api.get('/update_data');

      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async getCheckLastDate() {
    try {
      const response = await api.get('/check_last_date');

      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async getModelResultState() {
    try {
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 1);
      });

      // const response = await api.get('/get_model_result_state', {
      //   params: {
      //     state: 'SP',
      //   },
      // });

      return mock;
    } catch (error) {
      console.log(error);
    }
  }
}
