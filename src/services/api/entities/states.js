import api from '../apiConfig';

export class StatesEntity {
  async getStateList() {
    try {
      const response = await api.get('/get_state_list');

      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
