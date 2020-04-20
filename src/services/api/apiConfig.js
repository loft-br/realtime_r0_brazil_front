import axios from 'axios';

const api = axios.create({
  baseURL: 'https://realtime-r0-covid-brazil.herokuapp.com',
});

export default api;
